const mongoose = require('mongoose');


//create student data schema

const studentschema = mongoose.Schema({

    name : {
        type : String,
        required : [true, 'name is required'],
        trim : true
    }, email : {
        type : String,
        required : [true, 'email is required'],
        trim : true,
        unique : true
    },cell: {
        type : String,
        required : [true, 'cell is required'],
        trim : true,
        unique : true
    },photo: {
        type : String,
        default : 'avatar.png'
    },
    
},{
    timestamps : true
});






//module expore
module.exports = mongoose.model('student', studentschema);



