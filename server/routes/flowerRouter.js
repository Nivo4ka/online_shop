const Router = require('express')
const router = new Router()
const flowerController = require('../controllers/flowerController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), flowerController.create)
// 
router.get('/', flowerController.getAll)
router.delete('/:id',checkRole('ADMIN'), flowerController.deleteOne)

module.exports = router