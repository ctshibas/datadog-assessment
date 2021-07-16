const tracer = require('dd-trace').init({
	logInjection: true
})
const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const cors = require('cors')
const { mongoConnect } = require('./util/database')
const formats = require('dd-trace/ext/formats');

// set up for the dd-trace
// dd-trace.configure({ DD_ENV: "sandbox", DD_LOGS_INJECTION: true, DD_TRACE_SAMPLE_RATE="1" })

// set up code instrument for nodejs integration for datadog
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

// Increment a counter.
dogstatsd.increment('page.views')

// trying to use manual logging
class Logger {
    log(level, message) {
        const span = tracer.scope().active();
        const time = new Date().toISOString();
        const record = { time, level, message };

        if (span) {
            tracer.inject(span.context(), formats.LOG, record);
        }

        console.log(JSON.stringify(record));
    }
}

module.exports = Logger;

// controller
const errorController = require('./controllers/error')

// configure path for the env variables
dotenv.config({ path: './config/config.env' })

// start up app obj for express
const app = express();

// rendering ngin selection
// ...pug or handlebars

// including route library for villagers
const villagerRoutes = require('./routes/villager')

// rendering engine template
app.set('view engine', 'ejs');
app.set('views', 'views');

// app uses cross-origin
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

// test middleware for checking it's on the right port
// app.use('/', (req, res, next) => {
// });

// for rendering
// const expressHbs = require('express-handlebars');

// use the village routes
app.use(villagerRoutes);

// port to listen to + app = exp instance
const PORT = process.env.PORT || 3000

// error controller if page can't be found
app.use(errorController.get404);

mongoConnect(() => {
    app.listen(PORT)
    // console.log(result)
    console.log(`Connected on PORT ${PORT}`)
});

// server to listen on port
// later using mongoose to connect to the data
// mongoose.
//     connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
//     .then(result => {
//         app.listen(PORT)
//         // console.log(result)
//         console.log(`Connected on PORT ${PORT}`)
//     })
//     .catch(err => {
//         console.log(err);
//     });
