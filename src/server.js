const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//incialisaciones "initializations"
const app = express();

//configurarizaciones "settings"
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}));
app.set('view engine', '.hbs');

//funciones de peteciones "middlewares"
app.use(express.urlencoded({extended: false}));
//Global variables

//Routes
app.get('/', (req, res) =>{
    res.render('index');
})
//static file
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;