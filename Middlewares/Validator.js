const { body,validationResult } = require('express-validator');

exports.validationRegister = [
    body('email','Bad email format').isEmail(),
    body('password',"Your password must contain 6 char or Alpha").isLength({min : 6}).isAlphanumeric()
]

exports.Validation=(req,res,next)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).send(errors)
    }

    next()
}