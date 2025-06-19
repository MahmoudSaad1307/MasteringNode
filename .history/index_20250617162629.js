const http =require('http');
const thatServer=http.createServer((req,res)=>{
res.end("Hi Mother Fuckers");

})
 const PORT=7588;
thatServer.listen(PORT,()=>{

  console.log("server runing on h");
  
})