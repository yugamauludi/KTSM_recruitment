if (process.env.NODE_ENV !== "production"){
    require("dotenv").config();
  }
  
  const express = require('express')
  const { errorHandler } = require('./middleware/errorHandler')
  const app = express()
  const port = process.env.PORT || 3000
  const router = require('./routers')
  const cors = require('cors') 
  
  
  app.use(express.urlencoded({ extended:true }))
  app.use(express.json())
  app.use(cors())
  app.use(router)
  app.use(errorHandler)
  
   
  
  app.listen(port, () => {
    console.log(`success open localhost ${port}`);
  })
  
  module.exports = app