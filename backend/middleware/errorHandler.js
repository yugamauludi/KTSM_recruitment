const errorHandler = (error, req, res, next) => {
    if(error.name === 'SequelizeValidationError'){
        const errors = error.errors.map((el) => {
            return {message: el.message}
        }) 
        res.status(400).json(errors)
    } else if(error.name === 'SequelizeUniqueConstraintError'){
        const errors = error.errors[0]
        res.status(400).json(errors)
    } else if(error.name === 'BadRequest'){
        res.status(401).json({
            message: `email/password invalid!`
        })
    }  else if(error.name === 'Unauthorized'){
        res.status(401).json({
            message: `email/password wrong! enter the right email/password please!`
        })
    } else if(error.message === 'NotFound'){
        res.status(404).json({
            message: 'Data not found'
        })
    } else if(error.name === 'InvalidToken'){
        res.status(401).json({
            message: 'Login first'
        })
    } else {
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports = { errorHandler }