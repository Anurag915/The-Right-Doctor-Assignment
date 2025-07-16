const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'] // Example: Restrict gender values
  },
  mobile: {
    type: String,
    required: true,
    unique: true, // Ensure mobile numbers are unique
    trim: true,
    match: /^[0-9]{10}$/ // Example: Simple 10-digit mobile number validation
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields automatically
});

module.exports = mongoose.model('Person', personSchema);