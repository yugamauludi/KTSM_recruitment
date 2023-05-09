const express = require('express')
const router = express.Router()
const pdfRouter = require ('./pdfRouter')
const userRouter = require ('./userRouter')
const { authentication } = require('../middleware/authentication')


router.use('/users', userRouter)

router.use( authentication )
router.use('/pdf', pdfRouter)




module.exports = router