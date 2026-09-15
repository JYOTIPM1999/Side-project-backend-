const queryString = require("querystring");
function userDataSubmit(req, res) {
  let dataBody = [];
  let showData;
  req.on("data", (chunk) => {
    dataBody.push(chunk);
  });
  req.on("end", () => {
    let rawData = Buffer.concat(dataBody).toString();
    let readableData = queryString.parse(rawData);
    let dataString =
      "My Name is " + readableData.name + "emial" + readableData.email;
    showData = dataString;
  });
  res.write(`
      <h1>You got the data</h1>
      `);
  res.end(showData);
}
module.exports = userDataSubmit;
