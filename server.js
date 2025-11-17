const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/photos', require('./routes/photoRoutes'));

const PORT = process.env.PORT || 3000;




app.listen(3000, () => {
    console.log("Server Connected!!!");
    
})



