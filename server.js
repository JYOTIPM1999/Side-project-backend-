const http = require("http");
http
  .createServer((req, res) => {
    console.log(req);
    res.write("hello");
    res.end("Jyoti");
  })
  .listen(4800);
