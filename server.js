const express=require("express");
const cors=require("cors");
const mongodb=require("mongodb");

const app=express();
app.use(cors());
app.use(express.json());

const ashokIT=mongodb.MongoClient;

app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin123@statemanage.uigvn.mongodb.net/dev_db?retryWrites=true&w=majority",(err,connection)=>{
        if (err) throw err;
        else{
            const db=connection.db("dev_db");
            db.collection("products2").find().toArray((err,array)=>{
                if (err) throw err;
                else{
                    res.json(array);
                }
            })
        }
    });
});

app.listen(7070,()=>{
    console.log("server listening to the port no.7070");
})