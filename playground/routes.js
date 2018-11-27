const fs=require('fs');
function requestHandler(req,res){
if(req.url==="/")
{
    res.setHeader('Content-Type',"text/html");
    res.write("<html>")
    res.write("<head><title>Node</title></head>");
    res.write("<body><form action=\"/message\" method=\"POST\"><input type=\"text\" name=\"message\"/><input type='submit'/></form></body>");
    res.write("</html>")
    return res.end();    
}    
if(req.url==="/message" && req.method ==="POST")
{ 
    const body=[];
    req.on("data",(chunk)=>{
     body.push(chunk);
    })
    return req.on("end",()=>{
        const parsedBody=Buffer.concat(body).toString();
        console.log(parsedBody);
        const message=parsedBody.split("=")[1];
        fs.writeFile("message.txt",message,(err)=>{
            res.statusCode=302;//status code for redirection 
            res.setHeader("Location","/");//Location header property is known to browser and 
            //simply set the url to / on response
            return res.end();
        });
    })
    
}
res.setHeader('Content-Type',"text/html");
res.write("<html>")
res.write("<head><title>Node</title></head>");
res.write("<body><h1>Hello from champ</h1></body>");
res.write("</html>")
res.end();
}
module.exports=requestHandler;