const pieceController = require('../controllers/pieceController')

const router = require('express').Router()

router.get('/',pieceController.list)
router.post('/add',pieceController.add)

router.put('/update/:id',pieceController.update)
router.post('/delete/:id',pieceController.delete)
router.get('/:id',pieceController.getById)
module.exports = router
