const express = require('express');
const { user } = require('./routes/user');
const app = express()
const port = 3000;

app.set('view engine', 'ejs');

app.use('/user', user);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})