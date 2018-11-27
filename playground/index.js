const http = require('http');

const routes=require('./routes');
const server=http.createServer(routes);
    //process.exit();//takes us out of the event loop and our server quits running

    server.listen(3000,()=>{
    console.log("listening at port 3000");
})