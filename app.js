var express = require('express');
var cors = require('cors');

const port = 5000

var app = express();
app.use(cors())
app.use(express.static(__dirname + '/'));
app.get('*', () => {});

app.listen(port, function() {
    console.log("Server running at: http://localhost:" + port)
});
