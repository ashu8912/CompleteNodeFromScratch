const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();

app.set('view engine','pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
const adminData=require('./routes/admin');
const shopRoute=require('./routes/shop');
const notFoundRoute=require('./routes/404');
app.use('/admin',adminData.routes);
app.use(shopRoute);
app.use(notFoundRoute);
app.listen(8080,()=>{
    console.log("listening at port 8080");
})