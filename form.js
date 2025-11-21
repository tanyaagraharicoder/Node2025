const http = require('http');
const fs = require('fs');
const queryString= require('querystring');


http.createServer((req, res) => {
      // FIX: Ignore favicon request
    if (req.url === "/favicon.ico") {
        res.writeHead(204);
        return res.end();
    }

    if (req.url === "/") {
        // Serve the form
        fs.readFile('form.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, { "content-type": 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);  // send response directly
        });

    } else if (req.url === "/submit" && req.method === "POST") {

        let dataBody = [];

        req.on('data', (chunk) => {
            dataBody.push(chunk);
        });

        req.on('end', () => {   // FIXED: req.on, not res.on
            const parsedData = Buffer.concat(dataBody).toString();
            console.log("Form Data:", parsedData);
            let readableData= queryString.parse(parsedData);
            console.log(readableData);
            let datastring= "My name is " + readableData.name + " and my email is " + readableData.email;

            console.log(datastring);
            // fs.writeFileSync("text/"+readableData.name+".txt", datastring);
            // console.log("file created") 
            fs.writeFile("text/"+readableData.name+".txt", datastring, (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                    res.writeHead(500, { "content-type": "text/plain" });
                    res.end("Internal Server Error");
                    return;
                }
                console.log("File created");
            });


        
            res.writeHead(200, { "content-type": "text/html" });
            res.end("<h1>Data Submitted Successfully!</h1>");
        });

    } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Page Not Found");
    }

}).listen(9000, () => {
    console.log("Server running on http://localhost:9000");
});





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
