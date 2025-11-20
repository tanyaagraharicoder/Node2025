const http = require('http');

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")

    // res.write("<h2> Tanya agrahari <h2/>")
    res.write(`
        <html>
        <thead>
        <title> code step by step</title>
        </thead>
        <tbody> 
        <h1> hllo tanya agrahari</h1>
        <h2>`+ new Date +`</h2>
        </tbody>

        </html>
        `)
    res.end();
}).listen(5800, () => {
    console.log("Server running on http://localhost:5800");
});
