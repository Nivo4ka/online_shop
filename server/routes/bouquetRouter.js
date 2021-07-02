const Router = require('express')
const router = new Router()
const bouquetController = require('../controllers/bouquetController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), bouquetController.create)
//  
router.get('/', bouquetController.getAll)
router.get('/:id', bouquetController.getOne)
router.delete('/:id',checkRole('ADMIN'), bouquetController.deleteOne)


module.exports = router