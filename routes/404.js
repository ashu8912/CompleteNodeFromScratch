const express=require('express');
const router=express.Router();
const path=require('path');
const rootPath=require('../utils/path');
router.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootPath,'views','404.html'))
})
module.exports=router;