const express = require('express')
const Controller = require('../controllers/pdfController')

const router = express.Router()


router.get('/', Controller.findAll)
router.post('/', Controller.create)
router.delete('/:id', Controller.delete)




module.exports = router