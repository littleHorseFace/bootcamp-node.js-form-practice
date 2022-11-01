const express = require('express')
const app = express()
const path = require('path')
let comments = require('./model/commentData')
const { v4: getId } = require('uuid')
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('./comment/index', { comments })
})

app.get('/comment/new', (req, res) => {
  res.render('./comment/new')
})

app.post('/comment/new', (req, res) => {
  const { username, comment } = req.body
  comments.push({ username, comment, id: getId() })
  res.redirect('/')

})

app.patch('/comment/:id', (req, res) => {
  const { id } = req.params
  const newComment = req.body.comment
  const aditComment = comments.find(item => item.id === id)
  console.log(aditComment)
  console.log(newComment)
  aditComment.comment = newComment
  res.redirect('/')
})

app.delete('/comment/:id', (req, res) => {
  const { id } = req.params
  console.log(id)
  comments = comments.filter(item => {
    return item.id !== id
  })
  console.log(comments)
  res.redirect('/')
})

app.get('/comment/:id/adit', (req, res) => {
  const { id } = req.params
  const aditComment = comments.find(item => item.id === id)
  res.render('./comment/adit', { aditComment })
})

app.get('/comment/show/:id', (req, res) => {
  const { id } = req.params
  const iComment = comments.find(item => item.id === id)
  res.render('./comment/show', { iComment })
})

app.listen(3000, () => {
  console.log('this port is listening')
})