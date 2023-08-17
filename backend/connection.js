//data base connection code
const mongoose = require('mongoose');

const url ='mongodb+srv://yakash20dec:root@cluster0.fu5t92f.mongodb.net/vintagestore?retryWrites=true&w=majority';

//asynchronous function - returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('connected to mongoDB');
}).catch((err) => {
    console.log(err);
});
module.exports = mongoose;