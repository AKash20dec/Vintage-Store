const {model,Schema} = require('../connection');
//model is function schema is class
const myschema = new Schema({
    name  : String,
    email : String,
    password : String,
    avatar : String
});

module.exports = model('user', myschema);

