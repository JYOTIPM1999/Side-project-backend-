const http = require("http");

const userData = [
  {
    name: "Jyoti",
    age: 27,
    email: "abc@gmail.com",
  },
  {
    name: "Praskash",
    age: 27,
    email: "xyz@gmail.com",
  },
  {
    name: "Mohapatra",
    age: 27,
    email: "efg@gmail.com",
  },
];
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(userData));
    res.end();
  })
  .listen(4800);
