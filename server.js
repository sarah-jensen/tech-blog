const path = require('path');
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const helpers = require('./utils/helpers');

const routes = require('./routes');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

const sessionConfig = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});