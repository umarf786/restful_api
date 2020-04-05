//Import express and setup express router for use
const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

//Add a user at endpoint /users/add
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

//Delete a user at endpoint /users/remove/:id
router.delete('/remove/:id', async (req, res) => {
  try {
    const del = await Person.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

//Get all users at endpoint /users
router.get('/', async (req, res) => {
  try {
    const all = await Person.find();
    res.status(200).json({ success: true, data: all });
  } catch (err) {
    res.status(400).json({ success: false, error: error.message });
  }
});

//Get one user at endpoint /users/:id
router.get('/:id', async (req, res) => {
  try {
    const id = await Person.findById(req.params.id);
    res.status(200).json({ success: true, data: id });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

//Update a user at endpoint /users/update/:id
router.put('/update/:id', async (req, res) => {
  try {
    const update = await Person.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: true, data: update });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;
