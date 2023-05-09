const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET_KEY

module.exports = {
    sign : (payload) => {
    return jwt.sign(payload, secret)
    },
    decodedToken : (token) => {
        return jwt.verify(token, secret)
    }
}