
const express = require('express');
const router = express.Router();

// Định nghĩa các route
router.get('/', (req, res) => {
    res.send('Hello from the home route!');
});

module.exports = route;


function route(app){
    app.use(morgan('combined'))
 
    .get ('/' , ( req ,res)=> {
        res.render('home')
    });
    app.get ('/news' , ( req ,res)=> {
     
        res.send('news')
        });
     
}

