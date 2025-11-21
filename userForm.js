function userForm(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
    <form action="/submit" method="POST">
      <input type="text" placeholder="Enter name" name="name" />
      <input type="text" placeholder="Enter email" name="email" />
      <button type="submit">Submit</button>
    </form>
  `);
  res.end();
}

module.exports = userForm;
