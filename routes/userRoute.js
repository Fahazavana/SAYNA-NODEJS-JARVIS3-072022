const userController = require('../controllers/userController')

const router = require('express').Router()

router.get('/',userController.list)
router.post('/add',userController.add)

router.put('/update/:id',userController.update)
router.post('/delete/:id',userController.delete)
router.get('/:id',userController.getById)
module.exports = router
