const objectController = require('../controllers/objectController')

const router = require('express').Router()

router.get('/',objectController.list)
router.post('/add',objectController.add)

router.put('/update/:id',objectController.update)
router.post('/delete/:id',objectController.delete)
router.get('/:id',objectController.getById)
module.exports = router

