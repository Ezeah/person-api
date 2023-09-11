// Define the User(person) Schema
const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    user_id: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },  
{
  // Timestamps
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);