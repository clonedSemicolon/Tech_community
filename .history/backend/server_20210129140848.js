import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import GridsFsStorage from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser'
import path from 'path'
import Pusher from 'pusher'


Grid.mongo=mongoose.mongo

//app config

const app=express()
const port=process.env.PORT || 9000

//middlewares

app.use(bodyParser.json())
app.use(cors())

//db config

const mongoURI='mongodb+srv://avishakcb:<password>@project350v1.kmy5r.mongodb.net/<dbname>?retryWrites=true&w=majority'

const conn=mongoose.createConnection(mongoURI,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connect(mongoURI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.once('open',()=>{
    console.log('DB connected')
})

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



//api routes
app.get('/',(req,res)=>res.status(200).send('hello'))

app.post('/upload/image',upload.single('file'),(req,res)=>{
    res.status(201).send(req.file)
})


//listen 

app.listen(port,()=>console.log(`port ${port} is running`))