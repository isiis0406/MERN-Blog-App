const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const postRouter = require('./routes/postRouter');
const multer = require('multer');

//Use middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,"../backend/uploads")));


//Connexion to databasex
require('./database/db'); 



//Initiate routes
app.use(postRouter);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'uploads')
    },
    filename: (req, file, cb) =>{
        cb(null, req.body.name);
    }
})
const upload = multer({ storage: storage});
app.post("/upload",upload.single('file'), (req,res) =>{
    res.status(200).json( "image uploaded");

})


//Initiate the server
app.listen(process.env.PORT_SERVER, () =>{
    console.log(`server listenin on port : ${process.env.PORT_SERVER}`);
} )