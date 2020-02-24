const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const ProductSchema = new Schema({
 
   
    name: {
        type: String,
        required: true
    },
    // masterClasses: {
    //     type: [{type: Schema.Types.ObjectId, ref: 'masterclasses'}]
    // },
    timeRange:{
        type:[{startDate: {type: Date}},{endDate: {type: Date}}]
    }
    // expirationDate:{
    //     type: Date

    // }

})

module.exports = Product = mongoose.model('product', ProductSchema)



