const express = require("express")
const app = express()
const taskRoute = require("./routers/task")
const connectDB = require("./db/connect")
require("dotenv").config();

const PORT = 5000;

const start =async ()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT,console.log("サーバーが起動しました"))

    } catch(err){
        console.log(err)
    }
}
 start()
app.use("/api/v1/tasks",taskRoute)