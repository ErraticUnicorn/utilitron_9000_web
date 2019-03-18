var express = require('express');
var app = express();

const port = 5000

app.use(express.static(__dirname + '/'));
app.listen(port, function() {
    console.log("Server running at: http://localhost:" + port)
});