const path = require('path');
const express = require('express')
const router = express.Router(); 
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const app = express()
const port = 3002;

const routes = require('./routes');
app.use('/', routes);
 
app.use(express.static(path.join(__dirname, 'public')));
 
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('view engine', 'ejs');
console.log('PATH:', path.join(__dirname, 'resources/views'))
 

router(app)
app.use(morgan('combined'))
 
app.get ('/' , ( req ,res)=> {
    res.render('home')
});
app.get ('/news' , ( req ,res)=> {
 
    res.send('news')
    });
 
app.listen (port,()=> console.log(`Example app listening at http://localhost:${port}`))