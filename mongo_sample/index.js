

var express = require('express');

var app = express(); //app的诞生
var connect = require('connect'); //中间件库?

var config = require('./config');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var partials = require('express-partials');
app.use(partials());


app.use(express.static(__dirname + '/public'));



//controller文件
require('./routes')(app);



var mongoose = require('mongoose');
var db = mongoose.connect(config.db);
//sudo mongod --port 12777

//app.listen(config.port);
//console.log('Server start on ' + config.port);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + ';press Ctrl-C to terminate.');
});

