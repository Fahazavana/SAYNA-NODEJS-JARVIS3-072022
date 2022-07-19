const pieceController = require('../Controllers/pieceController')

const router = require('express').Router()

router.get('/',pieceController.list)
router.post('/',pieceController.add)

router.put('/:id',pieceController.update)
router.post('/:id',pieceController.delete)
router.get('/:id',pieceController.getById)
module.exports = router
