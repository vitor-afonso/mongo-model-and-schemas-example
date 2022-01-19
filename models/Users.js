//jshint esversion:8

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String },
    password: { type: String },
    job: { type: String }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

const data = { name: 'Alice', password: 'ironhack2018', job: 'Architect' };

User.create(data)
  .then(user => console.log('The user is saved and its value is: ', user))
  .catch(error => console.log('An error happened while saving a new user:', error));

module.exports = User;
