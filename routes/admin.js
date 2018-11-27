const express=require('express');
const router=express.Router();
const path=require('path');
const products=[];
const rootPath=require('../utils/path');
//these get,post and other similar methods look for the exact match of path 
//whereas app.use('/') looks for prefixes and not the entire match
router.post('/product',(req,res)=>{

    
    products.push({title:req.body.title});
    
    res.redirect('/');
})
router.get('/add-product',(req,res)=>{
    
    res.sendFile(path.join(rootPath,'views','add-product.html'));
})
exports.routes=router;
exports.products=products;