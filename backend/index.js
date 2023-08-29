
// import express
const express = require('express');

const cors = require('cors');


// initialize express app

const app = express();
const port = 5000;

//import userRouter
const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');
const OrderRouter = require('./routers/orderRouter');
const UtilRouter = require('./routers/util');


//middleware to convert json data to js object
app.use(cors());
app.use(express.json());

//middlewares
app.use('/user', UserRouter);
app.use('/product', ProductRouter);
app.use('/order', OrderRouter);

app.use('/util', UtilRouter);

app.use(express.static('./uploads'));





// starting the server
app.listen(port, () => {
    console.log(`Express Server started on ${port} successfully`);
});
// creating routes
app.get('/', (req, res) => {
    res.send('response from express server');
});
app.get('/home', (req, res) => {
    res.send('response from home');
});
app.get('/add', (req, res) => {
    res.send('response from add');
});