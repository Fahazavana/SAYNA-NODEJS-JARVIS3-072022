const objectController = require('../controllers/objectController')

const router = require('express').Router()

router.get('/',objectController.list)
router.post('/',objectController.add)

router.put('/:id',objectController.update)
router.post('/:id',objectController.delete)

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *       - object
 *     description: Returns a single puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Puppy's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single puppy
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.get('/:id',objectController.getById)
module.exports = router

