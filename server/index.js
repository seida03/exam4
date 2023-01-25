const cors=require("cors")
const bodyparser=require("body-parser")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const express=require("express")
const nodemon=require("nodemon")


dotenv.config()

const app=express()

app.use(bodyparser.json())

app.use(cors())


const {Schema}=mongoose
const flowersShema=new Schema({
    name:{type:String},
    price:{type:Number},
    img:{type:String},

})

const Flowers=mongoose.model("flowers", flowersShema)

app.get("/", (req,res)=>{
    res.send("<h1>Flowers</h1>")
})

app.get("/flowers", (req, res)=>{
    Flowers.find({}, (err, docs)=>{
        if(!err){
            res.send(docs)
        }else(
            res.send(err)
        )
    })
})


app.get("/flowers/:id", (req,res)=>{
    const id=req.params
    Flowers.findById(id, (err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.send("not found")
            }
        }else(err)
    })
})

app.delete("/flowers/:id", (req,res)=>{
    Flowers.findByIdAndDelete(id, (err)=>{
        if(!err){
            res.send("flower deleted")
        }else(err)
    })
})

app.post("/flowers", (req,res)=>{
    const newFlower= new Flowers({
        name:req.body.name,
        price:req.body.price,
        img:req.body.img
    })
    newFlower.save()
    res.send("flower created")
})


const url=process.env.URL
const PORT=process.env.PORT

mongoose.set('strictQuery', false);
mongoose.connect(url, (err)=>{
    if(!err){
        console.log("database is working");
        app.listen(PORT, (req,res)=>{
console.log("server is working");
        })
    }
    else{
        console.log(err);
    }
})