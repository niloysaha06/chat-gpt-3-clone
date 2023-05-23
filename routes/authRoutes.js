const express = require('express')
const { registerContoller, loginController, logoutController } = require('../controllers/authControllers')

//router object
const router = express.Router()


//routers
//Register
router.post('/register', registerContoller)

//Login
router.post('/login', loginController)

//Logout
router.post('/logout', logoutController)

module.exports = router