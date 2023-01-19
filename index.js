const express = require("express")
var cors = require('cors')
const { connection } = require("./config/db")
const { signinRouter } = require("./router/Signin.route")
const { signupRouter } = require("./router/Signup.router")
const { bugdataRouter } = require("./router/Bugdata.router")
const app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.use('/data',bugdataRouter)

app.use('/signup',signupRouter)

app.use('/signin',signinRouter)


app.listen(8000 , async ()=>{
    try{
        await connection
        console.log('connected to mongodb')
    }catch(err){
        console.log('show error')
        console.log(err)
    }
})