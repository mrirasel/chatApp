//external use
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

// internal imports
const loginRoute = require("./router/loginRoute");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

//internal imports
const {notFoundHandler, errorHandler} = require("./middleware/common/errorHandler");

const app =  express();

dotenv.config();


//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(()=> console.log("database connection successfully!"))
.catch((err)=> console.log(err));


//requeSt parser 
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//set view engine
app.set("view engine", "ejs");

//set static folder 
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup 
app.use('/', loginRoute);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler); 




app.listen(process.env.PORT,()=>{
    console.log(`app listening to port ${process.env.PORT}`);
});
