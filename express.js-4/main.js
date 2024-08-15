const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    siteName  = "adidas"
    searchText = "search_now"
  res.render("index",{siteName: siteName ,searchText :searchText})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why  and when ?"
    let blogContent = "it is very good brand"
     res.render("templates/blogpost.html", {blogContent:blogContent , blogTitle:blogTitle})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})