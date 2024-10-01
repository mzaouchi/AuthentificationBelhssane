const User = require("../Models/User")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.SignUp=async(req,res)=>{
    try {
        const {name,email,password} = req.body

        const found = await User.findOne({email})

        if(found){
            return res.status(400).send({errors : [{msg : "Email already exists"}]})
        }

        const newAcount = new User(req.body)


        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        const hashedPassword = bcrypt.hashSync(password, salt)

        newAcount.password = hashedPassword
        
        newAcount.save()

        const payload = {id : newAcount._id}
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '7d' })

        res.status(200).send({msg :"Account created",newAcount,token})

    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not create Account"}]})
    }
}

exports.SignIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors : [{msg : "Wrong MAIL OR PASSWORD"}]})
        }

        const matched = bcrypt.compareSync(password, found.password)

        if(!matched){
            return res.status(400).send({errors : [{msg :"Wrong MAIL OR PASSWORD"}]})
        }

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '7d' })

        res.status(200).send({msg : "Welcome",found,token})

    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not loggin"}]})
    }
}