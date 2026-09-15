const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
    
    </html>`);
  res.end("jyoti");
});
server.listen(4800);
