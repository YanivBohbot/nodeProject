const http = require('http');

const express = require('express');

app.use('/' , (req,res,next)=>{
    console.log("hello");
    next();
})

app.use('/add-product',(req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1> the Add prodcut</h1>');
    next(); // Allows the request to continue to the next middleware in line
});


app.use('/',(req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1> the Add prodcut</h1>');
   
});



const server = http.createServer(app);

server.listen(3000);
