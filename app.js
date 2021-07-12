const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')

// configure path for the env variables
dotenv.config({ path: './config/config.env' })

// start up app obj for express
const app = express();

// app uses cross-origin
app.use(cors())

app.use('/', (req, res, next) => {
    res.send('<h1>Success!</h1>');
    // console.log(process.env.PORT) - works and picks up the right
});

// port to listen to + app = exp instance
const PORT = process.env.PORT || 3000

// server to listen on port
app.listen(PORT)
