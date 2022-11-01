const { v4: getId } = require('uuid')

let comments = [
  {
    id: getId(),
    username: 'lily',
    comment: 'hi iam lily i am very pretty'
  },
  {
    id: getId(),
    username: 'tidy',
    comment: 'hi iam tidy i am very handsome'
  },
  {
    id: getId(),
    username: 'poly',
    comment: 'hi iam poly i am very ugly'
  },
  {
    id: getId(),
    username: 'horse',
    comment: 'i am not human i am horse'
  },
  {
    id: getId(),
    username: 'lemon',
    comment: 'i am frulit'
  },
]

module.exports = comments