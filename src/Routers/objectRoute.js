const objectController = require('../Controllers/objectController')


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
 *         description: Object's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Return Object's details
 *         schema:
 *           $ref: '#/definitions/Object'
 */
router.get('/:id',objectController.getById)
module.exports = router

