const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');


router.get('',blogController.blog_index);
router.get('/create',blogController.blog_create_get);
//router.post('',blogController.createResource);
router.get('/:id',blogController.blog_details);
router.delete('/:id',blogController.blog_delete);
//router.get('',blogController.CreteResource);
//router.post('',blogController.recources);


module.exports = router;