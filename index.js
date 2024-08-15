import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()
const connect = () => {
    try {
        mongoose.connect(process.env.MONGOSE)
        console.log("database connected")
    } catch (error) {
        console.log(error)
    } 
}
//middleware
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    }
       
    )})

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})


app.listen(8800, () => {
    connect() 
    console.log("backend server is running!!") })