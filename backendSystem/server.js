// This is the server for the app. Any documentation at the server side will be commented.
// Connecting to the express server

require('dotenv').config(); // configuration for the dotenv in order to use with the server.
const express = require('express');
const app = express();
const mongoose = require('mongoose');// Connecting to the mongoose server
const cors = require('cors');

// Importing all routes to be used in the main application
const customerRoutes = require('./routes/customerRoute');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');
const orderRoutes = require('./routes/orderRoute');


mongoose
.connect(process.env.mongoDB_URL)
.then(()=>{console.log('Database connected successfully!!')})
.catch((err)=>{
    console.log(err)// throws an error for wrong database credentials
})







app.use(express.json());// Used in order to get any response in json

const corsOptions = {
    origin: 'https://logistics-sweg-47.vercel.app', // Vercel domain
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions))

app.use('/api/customers',customerRoutes) // When the customer api is called , it uses the customerRoutes middleware
app.use('/api/auth',authRoutes)// When the login api is called , it uses the authRoutes middleware
app.use('/api/products',productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);
// localhost:7000/api/customers/login . This is what the above code means. When the this is finally hosted it will be updated.
app.listen( process.env.PORT || 7000,()=>{// Uses port 7000 if there is no designated port in the env
    console.log('Backend systen is functioning ');
});
