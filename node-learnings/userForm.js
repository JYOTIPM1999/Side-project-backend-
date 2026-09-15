function userForm(req, res) {
  res.write(`
    <form action="/submit" method="post">
    <input type="text" placeholder="Name" name="name"/>
    <input type="text" placeholder="Email" name="email"/>
    <button>Submit<button/>
    <form/>
    `);
}
module.exports = userForm;
