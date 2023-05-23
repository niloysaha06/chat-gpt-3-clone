const errorHandle = require('../middlewares/errormiddleware')
const userModel = require('../models/userModel')
const errorResponse = require('../utils/errorResponse')


//JWT TOKEN
exports.sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken(res)
    res.status(statusCode).json({
        success : true,
        token
    })
}

//Register
exports.registerContoller = async (req, res, next) => {
    try{
       const {username, email, password} = req.body
       //exixiting user
       const exisitingEmail = await userModel.finfOne({email})
       if(exisitingEmail){
        return next(new errorResponse('Email is already register', 500))
       }
       const user = await userModel.create({username, email, password})
       sendToken(user, 201, res)
    } catch(error) {
        console.log(error)
        next(error)
    }
}

exports.loginController = async (req, res, next) => {
    try{
       const {email, password} = req.body
       //validation 
       if(!email || ! password){
        return next(new errorResponse("please provide email or password"))
       }
       const user = await userModel.findOne({email})
       if(!user){
        return next(new errorResponse("Invalide Creditial", 401))
       }
       const isMatch = await userModel.matchPassword(password)
       if(!isMatch){
        return next(new errorHandle("Invalide Creditial", 401))
       }
       //res
       this.sendToken(user, 200, res)
    } catch(error){
        console.log(error)
        next(error)
    }
}

exports.logoutController = async (req, res) => {
    res.clearCookie("refreshToken")
    return res.status(200).json({
      success: true,
      message: "Logout Successfully"
    })
}