const mongoose = require('mongoose');


const dbConnect = (async () =>{
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGODB_URL,  { useUnifiedTopology: true, useNewUrlParser: true }, () => {
            console.log('connected to database');
        })
    } catch (error) {
        console.log(error);
    }
})();
module.exports.dbConnect = dbConnect;