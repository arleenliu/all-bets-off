const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const adminRoute = require('./routes/admin');
const config = require('config');

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './src/pages');

// app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.use(express.json());
app.use('/api', adminRoute);

const port = config.get("port") || 8080;
const dbConfig=config.get('dbConfig');

mongoose
    .connect(dbConfig.uri, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      useFindAndModify: false,
    })
    .then(() => {
        app.listen(port, () => console.log(`Server and Database running on ${port}, http://localhost:${port}`));
    })
    .catch((err) => {
        console.log(err);
    });
