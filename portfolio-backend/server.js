const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const connectDB = require('./config/db');
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({  origin: 'http://localhost:3000', }));



//listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
