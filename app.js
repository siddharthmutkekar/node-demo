const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody. Please work now!");
});
 
module.exports.app = app;
