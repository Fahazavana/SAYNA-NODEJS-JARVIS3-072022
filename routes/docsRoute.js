const docsController = require('../controllers/docsController')

const router = require('express').Router();
router.get('',docsController.indexView)
module.exports=router