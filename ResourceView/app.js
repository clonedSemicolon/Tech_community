const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const upload = require('express-fileupload');
const bodyParser = require('body-parser');
const File = require('./models/blog');

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb://Farhad:123farhad@db-shard-00-00.pdi1i.mongodb.net:27017,db-shard-00-01.pdi1i.mongodb.net:27017,db-shard-00-02.pdi1i.mongodb.net:27017/Node?ssl=true&replicaSet=atlas-pt6w42-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).then((result)=>app.listen(8000)).catch((err)=>console.log(err));

//register view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev')); 

/////////
app.post('',(req,res,next)=>{
   // const file = new File(req.body);
   const file = req.body;
   const movie = new File({
        file
   });
   console.log(movie);
   saveData(movie);

   try {
       
   } catch (error) {
       
   }

   // file.save().then((result)=>{
      //  res.redirect('./blogs');
    //}).catch((err)=>{
       // console.log(err);
   // });
});

//save file
function saveData(movie){

    movie.file = new Buffer.from(file.data, 'base64');
}


//routes
app.get('/', (req,res)=>{
    res.redirect('/blogs');
}); 

app.get('/about', (req, res)=>{

    res.render('about', {title: 'About'});
    
});

//blog routes
app.use('/blogs',blogRoutes);

//app.use(upload());

app.use((req, res)=>{

    res.status(404).render('404', {title: '404'});
    
});


