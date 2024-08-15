const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send('Hello World')
    console.log('this is a GET REQUEST');

})

app.post('/', (req, res) => {
    res.send('hi hello chodoo ')
    console.log('this is a POST REQUEST');

})

app.put('/', (req, res) => {
    res.send('RADHA KRISHNA')
    console.log('this is a put REQUEST');

})


app.delete('/', (req, res) => {
    res.send('RADHA KRISHNA BOLO')
    console.log('this is a delete REQUEST');

})
app.get('/index', (req, res) => {
    res.sendFile('templates/index.html',{root: __dirname})
    console.log('this is get request to retrive html');

})
app.get('/api', (req, res) => {
    res.json({a:1, b:2 , c:3 })
    console.log('this is get request to retrive html');

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})