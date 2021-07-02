const sequelize = require('../db')
const {DataTypes} = require('sequelize')
////////////////////////////////////////
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true,},
    phone: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketBouquet = sequelize.define('basket_bouquet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Bouquet = sequelize.define('bouquet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Flower = sequelize.define('flower', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const BouquetInfo = sequelize.define('bouquet_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeFlower = sequelize.define('type_flower', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BouquetFlower = sequelize.define('bouquet_flower', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketBouquet)
BasketBouquet.belongsTo(Basket)

Type.hasMany(Bouquet)
Bouquet.belongsTo(Type)

Flower.hasMany(Bouquet)
Bouquet.belongsTo(Flower)

Bouquet.hasMany(Rating)
Rating.belongsTo(Bouquet)

Bouquet.hasMany(BasketBouquet)
BasketBouquet.belongsTo(Bouquet)

Bouquet.hasMany(BouquetInfo, {as: 'info'});
BouquetInfo.belongsTo(Bouquet)

Type.belongsToMany(Flower, {through: TypeFlower })
Flower.belongsToMany(Type, {through: TypeFlower })

Bouquet.belongsToMany(Flower, {through: BouquetFlower })
Flower.belongsToMany(Bouquet, {through: BouquetFlower })

module.exports = {
    User,
    Basket,
    BasketBouquet,
    Bouquet,
    Flower,
    Rating,
    BouquetInfo,
    Flower,
    TypeFlower,
    Type
}