const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

//Add a user
router.post('/add', async (req, res) => {
  try {
    const person = new Person({
      name: req.body.name,
      age: req.body.age,
      date: req.body.date,
    });
    let newPerson = await person.save();
    console.log(newPerson);
    res.status(201).json({
      success: true,
      data: newPerson,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

//Delete a user
router.post('/remove/:id', async (req, res) => {
  try {
    const del = await Person.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

//Get all users
router.get('/', async (req, res) => {
  try {
    const all = await Person.find();
    res.status(200).json({ success: true, data: all });
  } catch (err) {
    res.status(400).json({ success: false, error: error.message });
  }
});

//Get one user
router.get('/:id', async (req, res) => {
  try {
    const id = await Person.findById(req.params.id);
    res.status(200).json({ success: true, data: id });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

//Update a user
router.put('/update/:id', async (req, res) => {
  try {
    const update = await Person.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: true, data: update });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;
