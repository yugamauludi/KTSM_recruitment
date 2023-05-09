const { comparePassword } = require('../helpers/password');
const { User } = require('../models')
const { sign } = require('../helpers/jwt')

class Controller {
    static async login(req, res, next){
        try {
            const {email, password} = req.body
            if(!email || !password){
                throw {name: 'BadRequest'}
            } 
            const user = await User.findOne({
                where: {email}
            })
            if(!user){
                throw {name : 'Unauthorized'}
            }else{
                const compare = comparePassword(password, user.password)
                if(!compare){
                    throw {name : 'Unauthorized'}
                } else {
                    const {id} = user
                    const access_token = sign ({
                        id
                    })
                    res.status(201).json({
                        access_token,
                        email : user.email,
                        role : user.role              
                    })
                }
            }

        } catch (error) {
            next(error)
        }
    }
}


module.exports = Controller