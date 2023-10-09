const path = require('path');
const express = require('express');
const bodyParser = require('body')
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3001;

// app.use(morgan('combined'));

// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');
// //resources/views path set up
// app.set('views', path.join(__dirname, 'resources/views'));
// //This is route
// app.get('/', (req, res) => {
//   res.render('home')
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// });

app.use();