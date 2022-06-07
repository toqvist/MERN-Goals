import express from 'express';
import { errorHandler } from './middleware/ErrorMiddleware';
// import dotenv from 'dotenv/config';
const dotenv = require ('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

// app.use defines middleware
// handle post body data from POST requests:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Custom error handler
app.use(errorHandler);

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})