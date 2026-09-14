const fs = require("fs");
const os = require("os");

fs.writeFileSync("Jyoti.txt", "testing code module");
console.log(os.platform());
console.log(process.cwd());
console.log(process.pid);
