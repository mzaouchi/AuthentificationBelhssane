const express = require('express')
const { SignUp, SignIn, CurrentUser } = require('../Controllers/User')
const { Validation, validationRegister } = require('../Middlewares/Validator')
const { isAuth } = require('../Middlewares/isAuth')


const userRouter = express.Router()

userRouter.post('/SignUp',validationRegister,Validation,SignUp)

userRouter.post('/SignIn',SignIn)

userRouter.get('/CurrentUser',isAuth,CurrentUser)

module.exports = userRouter