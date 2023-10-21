const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config()
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3001;

//To import static file to a directory in your project, use this:
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

//resources/views path set up
app.set('views', path.join(__dirname, 'resources/views'));

//This is route
app.get('/', (req, res) => {
  res.render('home')
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
app.use(morgan('combined'));