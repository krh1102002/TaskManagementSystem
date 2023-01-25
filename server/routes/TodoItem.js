const router=require("express").Router();
// import models 
const todoItemModel=require("../models/todoItem");

// adding item into our database 
router.post("/api/item", async(req,res)=>{
    try{
        const newItem=new todoItemModel({
            item:req.body.item
        })
        const saveItem=await newItem.save();
        res.status('200').json(saveItem);
    } catch(err){
        res.json(err);
    }
})

// getting information from database 
router.get('/api/items', async(req,res)=>{
    try{
        const allTodoItem=await todoItemModel.find({});
        res.status(200).json(allTodoItem);
    }
    catch(err){
        res.json(err);
    }
})

// updating item in database 
router.put('/api/item/:id', async(req,res)=>{
    try{
        // firstly we have to find that item 
        const updateItem=await todoItemModel.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json("item updated successfully🥳🎊🎉")
    }
    catch(err){
        res.json(err);
    }
})

// deleting item from the database 
router.delete('/api/item/:id',async(req,res)=>{
    try{
        const deleteItem=await todoItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json("item deleted successfully");
    }
    catch(err){
        res.json(err);
    }
})
// exporting router
module.exports=router;