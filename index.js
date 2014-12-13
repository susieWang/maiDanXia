var express = require('express');

var app = express();

app.set('port', 8093);

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile('/index.html', {
        root: __dirname
    });
});

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
