const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000

app.engine('hanslebars',handlebars())
app.set('view engine ','hamslebars ')

app.use(morgan('combined'))

app.get ('/' , ( req ,res)=> {

res.sendr('home')
})

app.listen (port,()=> console.log(`Example app listening at http://localhost:${port}`))