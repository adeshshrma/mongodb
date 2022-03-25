const mongoose = require('mongoose')

const mockData_1Shema = new mongoose.Schema({
  full_name: { type: String },
  email: { type: String },
  number: { type: Number },
  city: { type: String },
  url: { type: String },
})

module.exports = mongoose.model('MockData_1', mockData_1Shema)
