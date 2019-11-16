'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

//setting middleware
app.use(express.static('public'))
app.use(cors());

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
