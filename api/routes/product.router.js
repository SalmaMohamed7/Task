/* eslint-disable max-len */
const express = require('express');

const router = express.Router();
// const logger = require('../middleware/logger').logger;

// note that all imports happen at the beggining of the file
//const courseController = require('../controllers/course.controller');
const productController = require('../controllers/product.controller');

// All of our routes will be post, yes you read that right
// The naming of all services will follow the same pattern
// api/version_number/business_entity_name_lower_case_and_plural/the_name_of_the_service_as_object_verb
// an example would be
// api/v1/task/detailsInquiry
// From now on, routes will only use controllers
router.get('/view', productController.view_all_products)
router.get('/view/product', productController.view_product_by_type)
router.post('/create', productController.create_product)

module.exports = router;
