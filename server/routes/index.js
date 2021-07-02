const Router = require('express')
const router = new Router()
const bouquetRouter = require('./bouquetRouter')
const userRouter = require('./userRouter')
const flowerRouter = require('./flowerRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/flower', flowerRouter)
router.use('/bouquet', bouquetRouter)

module.exports = router