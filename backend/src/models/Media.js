const mongoose = require("mongoose");


const mediaSchema = new mongoose.Schema(
{
    filename:{
        type:String,
        required:true
    },

    url:{
        type:String,
        required:true
    },

    mimetype:{
        type:String
    },

    size:{
        type:Number
    }

},
{
    timestamps:true
});


module.exports = mongoose.model(
    "Media",
    mediaSchema
);