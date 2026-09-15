const http = require("http");
const arg = process.argv;
const PORT = arg[2];
http
  .createServer((req, res) => {
    res.write("Hello");
    res.end();
  })
  .listen(PORT);
