const {Flower} = require('../models/models')
const ApiError = require('../error/ApiError');

class FlowerController {
    async create(req, res) {
        const {name} = req.body
        const flower = await Flower.create({name})
        return res.json(flower)
    }

    async getAll(req, res) {
        const flowers = await Flower.findAll()
        return res.json(flowers)
    }

    async deleteOne(req, res) {
        const { id } = req.params
        const flower = await Flower.findByPk(id);
        await flower.destroy();
        res.send(200)
    }

}

module.exports = new FlowerController()