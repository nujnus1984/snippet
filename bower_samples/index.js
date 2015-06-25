

var express = require('express');

var app = express(); //app的诞生


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var partials = require('express-partials');
app.use(partials());

var serveIndex = require('serve-index'); //用来展现各种js
app.use('/', serveIndex('public', {'icons': true}))


app.use(express.static(__dirname + '/public'));





app.set('port', process.env.PORT || 9000);

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + ';press Ctrl-C to terminate.');
});

