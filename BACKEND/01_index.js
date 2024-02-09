require('dotenv').config()
const express = require('express')
// import  Express from 'express'
const app = express()
const port = 400

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
res.send('hello vikas')
})

app.get('/login',(req,res)=>{
    res.send('<h1> Please login at vikas')
})

app.get('/Youtube',(req,res)=>{
    res.send('<h2 Go on youtube')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})