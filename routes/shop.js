const express=require('express');
const rootPath=require('../utils/path');
const path=require('path');
const {products}=require('../routes/admin');
const router=express.Router();
router.get('/',(req,res)=>{
    console.log(products);
    res.render('shop',{prods:products,docTitle:"Shop"});
    //res.sendFile(path.join(rootPath,'views','shop.html'));
})
module.exports=router;