
const express = require('express');

const router = express.Router();

router.get('/', (req,res,next)=>{
    res.redirect('<h1>Hello from Yaniv</h1>');
}); 




module.exports =router;