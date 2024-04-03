
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const routes = require('./routers/userRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

mongoose.connect("mongodb://127.0.0.1:27017/quantum", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    app.listen(3001, () => {
      console.log(`Server is running on http://localhost:3001`);
    });
  })
  .catch((err) => console.error('Error connecting to the database', err));
