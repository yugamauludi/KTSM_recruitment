const { decodedToken } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
    try {
        const {access_token} = req.headers
        if(!access_token){
            throw { name: 'InvalidToken' }
        }

        const data = decodedToken(access_token)
        const user = await User.findByPk(data.id)
        if(!user){
            throw { name: 'InvalidToken'}
        }
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { authentication }