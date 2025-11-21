function userDataSubmit(req, res) {
  let body = [];

  req.on("data", chunk => {
    body.push(chunk);
  });

  req.on("end", () => {
    const parsed = Buffer.concat(body).toString();
    console.log("Form Data:", parsed);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Data submitted successfully!</h1>`);
    res.write(`<p>${parsed}</p>`);
    res.end();
  });
}

module.exports = userDataSubmit;
