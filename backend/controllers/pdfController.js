const { PDF } = require('../models')

class Controller {
    static async findAll(req, res, next) {
        try {
            const userId = req.user.id;
            const files = await PDF.findAll({
                where: {
                    userId: userId
                },
                order: [['updatedAt', 'DESC']]
            });
            res.status(200).json(files);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next){
        try {
            let {title, link} = req.body
            let userId = req.user.id
            let data = await PDF.create({
                    title,
                    link,
                    userId
                })
            res.status(201).json({
                message: `Success add ${data.title} as new movie with id ${data.id}`,
            })
        } catch (error) {
            next(error)

        }
    }

    static async delete(req, res, next){
        try {
            const PDFToDelete = await PDF.findOne({
                where: {id : req.params.id}
            })
            if(PDFToDelete){
                await PDF.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                res.status(200).json({
                    message: `successfully to delete`
                })
            } else {
                throw new Error({
                    message: 'NotFound'
                })
            }
        } catch (error) {
            next(error)
        }
    }
}




module.exports = Controller