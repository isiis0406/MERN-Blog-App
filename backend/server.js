const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const postRouter = require('./routes/postRouter') 

//Use middleware
app.use(express.json());
app.use(cors());

//Connexion to database
require('./database/db'); 



//Initiate routes
app.use(postRouter);


//Initiate the server
app.listen(process.env.PORT_SERVER, () =>{
    console.log(`server listenin on port : ${process.env.PORT_SERVER}`);
} )