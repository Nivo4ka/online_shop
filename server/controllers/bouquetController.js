const uuid = require('uuid')
const path = require('path');
const { Bouquet, BouquetInfo } = require('../models/models')
const ApiError = require('../error/ApiError');

class BouquetController {
    async create(req, res, next) {
        try {
            let { name, price, flowerId, typeId, info } = req.body
            console.log(req.body)
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const bouquet = await Bouquet.create({ name, price, flowerId, typeId, img: fileName });

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    BouquetInfo.create({
                        title: i.title,
                        description: i.description,
                        bouquetId: bouquet.id
                    })
                )
            }

            return res.json(bouquet)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let { flowerId, typeId, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let bouquets;
        if (!flowerId && !typeId) {
            bouquets = await Bouquet.findAndCountAll({ limit, offset })
        }
        if (flowerId && !typeId) {
            bouquets = await Bouquet.findAndCountAll({ where: { flowerId }, limit, offset })
        }
        if (!flowerId && typeId) {
            bouquets = await Bouquet.findAndCountAll({ where: { typeId }, limit, offset })
        }
        if (flowerId && typeId) {
            bouquets = await Bouquet.findAndCountAll({ where: { typeId, flowerId }, limit, offset })
        }
        return res.json(bouquets)
    }

    async getOne(req, res) {
        const { id } = req.params
        const bouquet = await Bouquet.findOne(
            {
                where: { id },
                include: [{ model: BouquetInfo, as: 'info' }]
            },
        )
        return res.json(bouquet)
    }

    async deleteOne(req, res) {
        const { id } = req.params
        const bouquet = await Bouquet.findByPk(id);
        await bouquet.destroy();
        res.send(200)
    }
}

module.exports = new BouquetController()