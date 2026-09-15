const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);
    console.log(req.headers);
    // res.setHeader("Content-Type", "application/json");
    // res.write();
    res.end();
  })
  .listen(4800);
