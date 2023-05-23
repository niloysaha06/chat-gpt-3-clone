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

exports.loginController = async () => {

}

exports.logoutController = async () => {


}