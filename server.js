const express = require('express');
const { user } = require('./routes/user');
const app = express()
const cors = require('cors');
const { notFoundFunnction } = require('./routes/functions/apis');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');

app.use('/user', user);
app.use(notFoundFunnction)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})