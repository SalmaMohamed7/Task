const Product = require('../../models/Product')
const Query = require('../../models/Query')

//const validate = require('../validations/course.validations')
//router.use(express.json())
const Joi = require('joi')
const uuid = require('uuid') 
const mongoose = require('mongoose')
const objectId = require('mongoose').objectid //needed to access by id
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey
const bcrypt = require('bcryptjs');

exports.view_all_queries = async (req,res) => {
    const queries = await Query.find()
    res.json({data: queries})
}

exports.create_query= async (req,res) => {
    try {
    // const isValidated = validator.createValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const { name} = req.body;
		const query = await Query.findOne({ name }); //making sure email is unique
		if (query) return res.status(400).json({ name: 'name already exists' });
        const newQuery = new Query({
            name
            //components
			
		});
    await Query.create(newQuery);
     res.json({msg:'Query was created successfully', data: newQuery})
    }

    catch(error) {
        // We will be handling the error later
        console.log("here catch")
        console.log(error)
    }  
 };

