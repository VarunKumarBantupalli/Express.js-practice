const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello World!')
})

app.get('/query', (req, res) => {
    res.send('Hello World!')
})

app.get('/help', (req, res) => {
    res.send('Hello World!')
})

app.get('/gone', (req, res) => {
    res.send('Hello World!')
})

app.get('/blog/:slug/:second', (req, res) => {
    res.send(`hello ! ${req.params.slug} and ${req.params.second}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     res.send('java script')
// })

// app.get('/blog/intro-to-typeScript', (req, res) => {
//     res.send('type script')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})