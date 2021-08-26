const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
 
const port = process.env.PORT;


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const clientSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true}
});

const Client = mongoose.model('Client',clientSchema);
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})