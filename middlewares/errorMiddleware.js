const errorResponse = require("../utils/errorResponse")


const errorHandle = (err, req, res, next) => {
    let err = {...err}
    err.message = err.message


    //mongoose cast Error
    if(err.name == 'casterror'){
        const message = 'Resources Not Found'
        error = new errorResponse(message, 404)
    }
    //duplicate key error
    if(err.code = 11000){
        const message = "Duplicate field value enterd"
        error = new errorResponse(message, 400)
    }
    //mongoose validation
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.error)
        error = new errorResponse(message, 400)
        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message || "Server Error"
        })
    }
}

module.exports = errorHandle