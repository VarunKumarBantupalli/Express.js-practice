const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")


// app.use(express.static("public"))

// const myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
//   }

//   app.use(myLogger)


app.use('/blog',blog)


//middle ware 1
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = 56 ;  
    console.log('middle ware concepts-1');
    next()
})

//middle ware 2
app.use((req, res, next) => {
    fs.appendFileSync("logs2.txt",`${Date.now()} is a ${req.method}\n`)
    console.log('middle ware concepts-2');
    next()
})

app.get('/', (req, res) => {
    res.send('this is main page!')
})

app.get('/about', (req, res) => {
    res.send('this is about page! '+req.harry)
})

app.get('/help', (req, res) => {
    res.send('this is help page!')
})

app.get('/support', (req, res) => {
    res.send('this is support page!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})