require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.get('/',function(req, res){
  res.send('<h1>Equpipo 6-4D </h1>');
});
app.use(require('./routes/usuario'));
app.use(require('./routes/login'));
app.use(require('./routes/administrador'));
//ivanprueba
//GwIqBieM8xaAw2FP
 mongoose.connect('mongodb+srv://ivanprueba:GwIqBieM8xaAw2FP@cluster0.7xd3wzk.mongodb.net/mercadoapp',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: false,
      //useCreateIndex: true
 },(err, res) => {
  if(err) throw err;
  console.log('Base de datos en Linea');
});

app.listen(process.env.PORT, ( )=> {
  console.log('La aplicacion por el puerto', process.env.PORT)
});