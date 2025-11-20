const http = require('http');
const fs= require('fs');
http.createServer((req, res)=>{
    fs.readFile('form.html' ,'utf-8', (error, data)=>{
        if(error){
            res.writeHead(500,{"content-type": 'text/plain'})
            res.end(' internal error')
            return;
        }

        res.writeHead(200, { "content-type": "text/html" });
         if (req.url === "/") {
      res.write(data
            );
    } else if (req.url === "/submit" ) {
      res.write("<h1> data submitted</h1>");
    }
    res.end()
    })



}).listen(9000);




//   htpp.createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/html" });
//     console.log(req.url);
//     if (req.url == "/") {
//       res.write(`
//             <form>
//             <input type ="text" placeholder="enter name " name='name' >
//             <input type ="text" placeholder="enter email " name='email' >
//             <button> submit </button>

//             </form>
//             `);
//     } else if (req.url === "/submit") {
//       res.write("<h1> data submitted</h1>");
//     }
//     res.end();
//   })
//   .listen(9000, () => {
//     console.log(" server is running at");
//   });
