const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')

// Getting all Contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One Contact
router.get('/:id', async (req, res) => {
  try {
    const contacts = await Contact.findById(req.body._id)
    res.json(contacts)
    if (contacts == null) {
      return res.status(404).json({ message: 'Cannot find contact' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

// Creating one Contact
router.post('/', async (req, res) => {
  const contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  })
  try {
    const newContact = await contact.save()
    res.status(201).json(newContact)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One Contact
router.put('/:id', async (req, res) => {
  const contacts = await Contact.findById(req.body._id)
  if (req.body.firstName != null) {
    let update = {$set: {firstName: req.body.firstName}}
    try {
      await Contact.updateOne(contacts, update)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
  if (req.body.lastName != null) {
    let update = {$set: {lastName: req.body.lastName}}
    try {
      await Contact.updateOne(contacts, update)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
  if (req.body.email != null) {
    let update = {$set: {email: req.body.email}}
    try {
      await Contact.updateOne(contacts, update)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
  try {
    const updatedContact = await Contact.findById(req.body._id)
    res.json(updatedContact)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One Contact
router.delete('/:id', async (req, res) => {
  try {
    const contacts = await Contact.findById(req.body._id)
    await Contact.deleteOne(contacts)
    res.json({ message: 'Deleted Contact' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//Remove all Contacts
router.delete('/', async (req, res) => {
  try {
    await Contact.deleteMany({})
    res.json({ message: 'Deleted All Contacts' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router