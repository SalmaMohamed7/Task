const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const ProductSchema = new Schema({
 
   
    product_type: {
        type: String,
        required: true
    },
    // masterClasses: {
    //     type: [{type: Schema.Types.ObjectId, ref: 'masterclasses'}]
    // },
    time_range:{
        type:[{start_date: Date,end_date: Date}]
    }
    // time_range:{
    //     type:[{start_date: {type: Date}},{end_date: {type: Date}}]
    // }

})

module.exports = Product = mongoose.model('product', ProductSchema)



