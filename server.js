const express =require('express');
const mongoose =require('mongoose');
const bodyParser=require('body-parser');

const items = require('./routes/api/items');

//Initialiser "express" dans une varibale nomee "app"
const app=express();

//BodyParser MiddleWare
app.use(bodyParser.json());

//Db config
const db = require('./config/keys').mongoURI;

//connect to mongoDB

mongoose
        .connect(db)
        .then( ()=> console.log("MongoDB connected ...") )
        .catch( err=> console.log(err)  );

//use routes
app.use('/api/items' , items);

const port = process.env.PORT ||5000 ;

app.listen(port, ()=> console.log(`Sever started on port ${port}`) );
        
        