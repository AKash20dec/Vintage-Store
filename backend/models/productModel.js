const {model,Schema} = require('../connection');
const myschema = new Schema({
    title  : String,
    description : String,
    price : Number,
    category: String,
    image: String,
    address:String
});

module.exports = model('product', myschema);