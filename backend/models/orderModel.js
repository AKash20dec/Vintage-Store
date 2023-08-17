const {model,Schema, Types} = require('../connection');
//model is function schema is class
const myschema = new Schema({
    user  : {type: Types.ObjectId, ref: 'user'},
    product : {type: Types.ObjectId, ref: 'product'},
    address : String,
    createdAt : Date
});

module.exports = model('orders', myschema);

