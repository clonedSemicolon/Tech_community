import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import GridsFsStorage from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser'
import path, { resolve } from 'path'
import Pusher from 'pusher'
import mongoPosts from './postModel'

Grid.mongo=mongoose.mongo

//app config

const app=express()
const port=process.env.PORT || 9000

//middlewares

app.use(bodyParser.json());
app.use(cors())

//db config

const mongoURI='mongodb+srv://avishak_10:R0Ju332Xo2mwgqPP@project350v1.kmy5r.mongodb.net/techcom-post?retryWrites=true&w=majority'

const conn=mongoose.createConnection(mongoURI,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

let gfs

conn.once('open',()=>{
    console.log('DB Connected')
    gfs=Grid(conn.db,mongoose.mongo)
    gfs.collection('images')
})

const storage=new GridsFsStorage({
    url:mongoURI,
    file:(req,file)=>{
        return new Promise((resolve,reject)=>{
            const filename=`image-${Date.now()}${path.extname(file.originalname)}`

            const fileInfo={
                filename:filename,
                bucketName:'images'
            };

            resolve(fileInfo);
        });
    }
});

const upload=multer({storage});

mongoose.connect(mongoURI,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//api routes
app.get('/',(req,res)=>res.status(200).send('hello'))

app.post('/upload/images',upload.single('file'),(req,res)=>{
    res.status(201).send(req.file)
})

app.post('./upload/posts',(req,res)=>{
    const dbPost=req.body
    console.log(dbPost);

    mongoPosts.create(dbPost,(err,data)=>{
        if(err){
        res.status(500).send(err)}
        else{
            res.status(201).send
        }
    })
})

//listen 

app.listen(port,()=>console.log(`port ${port} is running`))