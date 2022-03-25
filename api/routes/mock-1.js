const router = require('express').Router()

const { getData } = require('../controller/mockData-1')

router.get('/getdata', getData)

module.exports = router
