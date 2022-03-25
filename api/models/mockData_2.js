const mongoose = require('mongoose')

const mockData_2Shema = new mongoose.Schema({
  full_name: { type: String },
  email: { type: String },
  team_name: { type: String },
})

module.exports = mongoose.model('MockData_2', mockData_2Shema)
