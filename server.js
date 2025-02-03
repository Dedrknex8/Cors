require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {corsConfig} = require('./config/corsConfig');
const {requestLogger,timeStamp} = require('./middleware/customMiddleware')
const {globalErrorHandler} = require('./middleware/errorHandler')
const {urlVersoning,headerVersoning,contentTypeVersoning} = require('./middleware/apiVersioning');
const {createBasicRateLimiter} = require('./middleware/rateLimit');
const itemsRouter  =require('./routes/item-route');
const app = express();

// MIDDLEWARE
app.use(corsConfig());
app.use(requestLogger);
app.use(timeStamp);
app.use(createBasicRateLimiter(10,15*60*10)); //100 per req and 15 mintures halt
app.use(express.json());
app.use(urlVersoning('v1'));
app.use('/api/v1',itemsRouter);
app.use(globalErrorHandler);
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is listing on port ${PORT}`);
})