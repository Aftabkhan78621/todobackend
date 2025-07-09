// expres ko import krenge
const express = require('express')

// express ko instance bna rhe h jie hum app khte h 
const app = express()
// cors import krenge taki react native se request allow ho
const cors = require('cors')
const { connect } = require('mongoose')

// middleware use kr rhe h --- json body parse ke liye
app.use(cors()) // bina iske rn s fetch axios kam nhi krega
app.use(express.json()) // json body parse krega

// db conncet krega
const connectDB = require('./config/db')
connectDB()  // 3rd step m akr joda isko dbms ko

const todoRoutes = require('./routes/todoRoutes') // routes ko import krenge
app.use("/api/todo",todoRoutes);



//text route bna rhe h -- get method pe basic msg dikhane keliye
app.get('/',(req,res)=>{
    res.send("server is running")
})

// port define kr rhe h --- jha server chlega
const PORT = process.env.PORT || 5000;

//server ko start kr rhe h app.listen s
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})