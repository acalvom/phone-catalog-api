const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const app = express();

const phonesRoutes = require('./app/phoneRoutes');
app.use(phonesRoutes);

app.disable("x-powered-by");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.options('*', cors());
app.use(cors());

app.get('/', (req, res) => {
    res.send('index.js')
})

// Start the server
app.listen(port, function () {
    if (port === 8000)
        console.log("Node Server at http://localhost:" + port);
    else
        console.log("Node Server at: " + port);
    console.log("Hour: " + Date());
});

module.exports = app;
