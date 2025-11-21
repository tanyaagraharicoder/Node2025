const http = require('http');
const userForm = require('./userForm');
const userDataSubmit = require('./userDataSubmit');

http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        userForm(req, res);
    } 
    else if (req.url === "/submit" && req.method === "POST") {
        userDataSubmit(req, res);
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Page Not Found</h1>");
    }

}).listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
});
