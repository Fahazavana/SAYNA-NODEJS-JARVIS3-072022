const userController = require('../controllers/userController')

const router = require('express').Router()

router.get('/',userController.list)
router.put('/:id',userController.update)
router.post('/:id',userController.delete)
router.get('/:id',userController.getById)
module.exports = router
