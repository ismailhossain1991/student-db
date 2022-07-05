const mongoose = require('mongoose')


//mongodbconnection

const mongoDbconnection = async () => {

    try{
       await mongoose.connect(process.env.MONGO_STRING)
        console.log(`mongo db connection is ready`);
    } catch(error){

    }
    
}




//module export

module.exports = mongoDbconnection;