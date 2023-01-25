// for creating Schema 
const mongoose=require("mongoose");

// creating mongoose.Schema(structure) 

const TodoSchema=new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('todo',TodoSchema);