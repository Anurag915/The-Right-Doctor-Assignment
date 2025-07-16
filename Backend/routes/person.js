const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// Middleware to get person by ID
async function getPerson(req, res, next) {
  let person;
  try {
    person = await Person.findById(req.params.id);
    if (person == null) {
      return res.status(404).json({ message: 'Cannot find person' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.person = person;
  next();
}

// GET /person: Displays a table with a list of people
router.get('/', async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /person: Displays a form to create a single person (handles form submission)
router.post('/', async (req, res) => {
  const { name, age, gender, mobile } = req.body;

  // Basic validation
  if (!name || !age || !gender || !mobile) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  if (isNaN(age) || age < 0) {
    return res.status(400).json({ message: 'Age must be a non-negative number.' });
  }
  if (!/^[0-9]{10}$/.test(mobile)) {
    return res.status(400).json({ message: 'Mobile number must be 10 digits.' });
  }

  const person = new Person({
    name,
    age,
    gender,
    mobile
  });

  try {
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (err) {
    // Handle duplicate mobile number error
    if (err.code === 11000 && err.keyPattern && err.keyPattern.mobile) {
      return res.status(409).json({ message: 'Mobile number already exists.' });
    }
    res.status(400).json({ message: err.message });
  }
});

// GET /person/{id}: Get a single person by ID (for edit/delete forms)
router.get('/:id', getPerson, (req, res) => {
  res.json(res.person);
});

// PUT /person/{id}: Edits and updates a person
router.put('/:id', getPerson, async (req, res) => {
  const { name, age, gender, mobile } = req.body;

  // Basic validation
  if (name !== undefined && !name) {
    return res.status(400).json({ message: 'Name cannot be empty.' });
  }
  if (age !== undefined && (isNaN(age) || age < 0)) {
    return res.status(400).json({ message: 'Age must be a non-negative number.' });
  }
  if (gender !== undefined && !gender) {
    return res.status(400).json({ message: 'Gender cannot be empty.' });
  }
  if (mobile !== undefined && !/^[0-9]{10}$/.test(mobile)) {
    return res.status(400).json({ message: 'Mobile number must be 10 digits.' });
  }

  if (name != null) res.person.name = name;
  if (age != null) res.person.age = age;
  if (gender != null) res.person.gender = gender;
  if (mobile != null) res.person.mobile = mobile;

  try {
    const updatedPerson = await res.person.save();
    res.json(updatedPerson);
  } catch (err) {
    // Handle duplicate mobile number error on update
    if (err.code === 11000 && err.keyPattern && err.keyPattern.mobile) {
      return res.status(409).json({ message: 'Mobile number already exists.' });
    }
    res.status(400).json({ message: err.message });
  }
});

// DELETE /person/{id}: Deletes a person
router.delete('/:id', getPerson, async (req, res) => {
  try {
    await res.person.deleteOne(); // Use deleteOne() instead of remove()
    res.json({ message: 'Person deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;