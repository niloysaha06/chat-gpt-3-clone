const express = require("express")
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser")
const colous = require("colors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv
dotenv.config()

//mongo connection

connectDB();

//rest object
const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("dev"))

const PORT = process.env.PORT || 8080

//listen server
app.listen(8080, ()=> {
    console.log(`Server Running in ${process.env.DEV_MODE} mode on port on ${PORT}`.bgCyan.white)
})

