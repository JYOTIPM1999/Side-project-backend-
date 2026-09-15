const path = require("path");
const file = "files/jyoti.txt";

//path modules
console.log(path.extname(file));
console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.resolve("text", "jyoti.txt"));

//global constants
console.log(__dirname);
console.log(__filename);
