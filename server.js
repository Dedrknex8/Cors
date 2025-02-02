require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {corsConfig} = require('./config/corsConfig');
const app = express();

app.use(cors())

app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is listing on port ${PORT}`);
})