const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const QuerySchema = new Schema({
 
   
    name: {
        type: String,
        required: true
    },
    components: {
        type: [{type: Schema.Types.ObjectId, ref: 'product'}]
    },
    

})

module.exports = Query = mongoose.model('query', QuerySchema)



