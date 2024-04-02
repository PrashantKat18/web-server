const http = require('http');
const data = require('./data')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(4000);



let a = 10;
let b= 30 ;

let waitingDta =  new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(50)
    },2000)
})

waitingDta.then((data)=>{
   console.log(a+data);
})
