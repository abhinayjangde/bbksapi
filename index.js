import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import db from "./middlewares/db.js"
import UserModel from "./models/User.js"
dotenv.config()
// process.loadEnvFile() latest version of nodejs
const port = process.env.PORT
const app = express()

db(process.env.DB_URL)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.post('/api/signup', async (req,res)=>{
    const {name,email,password} = req.body
    const user = await UserModel({name:name,email:email,password:password})
    await user.save()
    res.status(201).json({"created":true})
})


app.post('/api/login', (req,res)=>{
    const {email,password} = req.body
    res.status(201).json(req.body)
})

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is running....")
    }
})