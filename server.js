const Joi = require('joi');//not needed
const uuid = require('uuid');//not needed
const express = require('express')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors')
const passport = require('passport');//for login
const passportJWT = require("passport-jwt");//trial auth
const ExtractJwt = passportJWT.ExtractJwt; //trial auth
const JwtStrategy = passportJWT.Strategy;//trial auth


const queries = require('./api/routes/query.router')
const products = require('./api/routes/product.router')



const app = express()




const db = require('./config/keys').mongoURI
// console.log(db);
mongoose
   .connect(db,{useNewUrlParser: true})
    // .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))


    process.on('uncaughtException', function (err) {
      console.log(err);
  }); 

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(passport.initialize()) //login
require('./config/passport')(passport)//login

  
// }

app.get('/', (req, res) => {

  res.send(`<h1>Welcome to LirtenHub</h1>
  <a href="/api/query/view">Query</a>
  <a href="/api/product/view">product</a>
  <a href="/api/members">members</a>
  <a href="/api/admins">admins</a>
  <a href="/api/masterclasses">masterclasses</a>
  <a href="/api/partners">Partners</a>
  <a href="/api/educationalOrganizations">Educational Organizations</a>
  <a href="/api/jobs">Job</a>
  <a href="/api/assessments">Assessments</a>
  `);

});

// Direct routes to appropriate files

app.use('/api/query', queries)
app.use('/api/product', products)


//app.use('/api/educationalOrganizations', educationalOrganizations)





app.use((req, res) => {

  res.status(404).send({ err: "We can not find what you are looking for" });

});


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server on ${port}`))

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,'client', 'build','index.html'));
  });

  
}