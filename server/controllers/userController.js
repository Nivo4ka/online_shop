const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, phone, role) => {
    return jwt.sign(
        {id,email, phone, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {

    async registration(req, res, next) {
        const {name, email, phone, password, role} = req.body
        console.log(req.body)
        if (!email || !password || !phone || !name ) {
            return next(ApiError.badRequest('Некорректный email, password, phone или name'))
        }
        const candidate1 = await User.findOne({where: {email}})
        const candidate2 = await User.findOne({where: {phone}})
        
        if (candidate1 || candidate2) {
            return next(ApiError.badRequest('Пользователь с таким email или phone уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name, email, phone, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email,user.phone, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id,user.email,user.phone, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.role)
        return res.json({token})
    }
    
}

module.exports = new UserController()