const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require('./routes/authRoutes')
const app = express();

// 1) Midderware
app.use(cors());
app.use(express.json());


// 2) routes
app.use('/api/auth', authRouter);

// 3) Mongodb connection
mongoose
.connect('mongodb://127.0.0.1:27017/authentication')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Failed to connect mongoDB:', error))


// 4) global error handler
app.use((err, req, res, next) => {
    err.statuCode = err.statuCode || 500;
    err.status = err.status || 'error';

    res.status(err.statuCode).json({
        status: err.status,
        messege: err.messege,
    });
});


// 5) server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
    
})


// http://localhost:3000/api/auth/login
// http://localhost:3000/api/auth/signupz