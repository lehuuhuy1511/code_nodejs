const part = reqiure('part')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs',handlebars({
    extname:'.hbs'
}));
app.set('view engine ','hbs ');
app.set('view',path.join(__driname,'views'));

console.log('PATH:', path.join(__dirname, 'resources/views'))

app.use(morgan('combined'))

app.get ('/' , ( req ,res)=> {

res.sendr('home')
})
app.get ('/news' , ( req ,res)=> {

    res.sendr('news')
    })

app.listen (port,()=> console.log(`Example app listening at http://localhost:${port}`))