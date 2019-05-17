const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const db = require('./config/database');
const jwt = require('./_helpers/jwt');
const routes = require('./app/routes');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// call database connection
db();

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

// use JWT auth to secure the api
app.use(jwt());

// use express router
app.use('/api', router);

// api routes
routes(router);

// start server
const port = config.port;
app.listen(port, () => {
    console.log('The server is live on ' + port);
});