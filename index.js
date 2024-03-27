const express = require('express')
require('dotenv').config()
// import express from "express"
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res) =>{
    res.send('akshat_singhal_._.2133')
})

app.get('/login',(req,res)=>{
    res.send('<h1> Please login at chai aur code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})