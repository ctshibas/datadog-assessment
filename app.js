const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// controller
const errorController = require('./controllers/error');

// configure path for the env variables
dotenv.config({ path: './config/config.env' })

// start up app obj for express
const app = express();

// rendering ngin selection
// ...pug or handlebars

// including route library
const villagerRoutes = require('./routes/villager')

// app uses cross-origin
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

// test middleware for checking it's on the right port
app.use('/', (req, res, next) => {
    res.send('<h1>Success!</h1>');
});

// port to listen to + app = exp instance
const PORT = process.env.PORT || 3000

// error controller if page can't be found
app.use(errorController.get404);

// server to listen on port
// later using mongoose to connect to the data
mongoose.
    connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(result => {
        app.listen(PORT)
        console.log(`Connected on PORT ${PORT}`)
    })
    .catch(err => {
        console.log(err);
    });
