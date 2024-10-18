const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Getting all Users
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One User
router.get('/:id', async (req, res) => {
  try {
    const users = await User.findById(req.body._id)
    res.json(users)
    if (users == null) {
      return res.status(404).json({ message: 'Cannot find user' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

// Creating one User
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    createdDate: req.body.createdDate,
    updatedDate: req.body.updatedDate,
  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One User
router.put('/:id', async (req, res) => {
  const users = await User.findById(req.body._id)
  if (req.body.name != null) {
    const update1 = {$set: {name: req.body.name}}
    try {
      await User.updateOne(users, update1)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
  if (req.body.email != null) {
    const update2 = {$set: {email: req.body.email}}
    try {
      await User.updateOne(users, update2)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
  if (req.body.password != null) {
    const update3 = {$set: {email: req.body.password}}
    try {
      await User.updateOne(users, update3)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
  try {
    const updatedUser = await User.findById(req.body._id)
    res.json(updatedUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One User
router.delete('/:id', async (req, res) => {
  try {
    const users = await User.findById(req.body._id)
    await User.deleteOne(users)
    res.json({ message: 'Deleted User' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//Remove all Users
router.delete('/', async (req, res) => {
  try {
    await User.deleteMany({})
    res.json({ message: 'Deleted All Users' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router