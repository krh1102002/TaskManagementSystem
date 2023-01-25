const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv").config();
const cors=require('cors');
const app=express();

// for getting data in json format 
app.use(express.json());
const PORT=process.env.PORT || 5500;

// using cors(use when we change our localhost port from 3000 to 5500 then at that time it require) 
app.use(cors());

// Importing routes 
const TodoItemRoute=require('./routes/TodoItem');

// connecting to database 
mongoose.connect(process.env.DB_CONNECT).then(()=>console.log("Database connected")).catch(err=>console.log(err))


app.listen(PORT,()=>console.log(`server connected on localhost:// ${PORT}`));

app.use("/",TodoItemRoute);