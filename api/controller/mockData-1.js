const MockData_1 = require('../models/mockData_1')
const mockData_2 = require('../models/mockData_2')

const getData = async (req, res) => {
  const data = await MockData_1.aggregate([
    {
      $lookup: {
        from: 'mockdata_2',
        localField: 'full_name',
        foreignField: 'full_name',
        as: 'data',
      },
    },

    {
      $project: {
        full_name: 1,
        email: 1,
        number: 1,
        city: 1,
        url: 1,
        team_name: '$data.team_name',
      },
    },
  ])
  res.status(200).json(data)
}

module.exports = { getData }
