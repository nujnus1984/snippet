
var express = require('express');
var app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var partials = require('express-partials');
app.use(partials());


app.use(express.static(__dirname + '/public'));
//http://localhost:5000/img/abc.jpg



//controller文件
index = function(req, res){
  res.locals.team = "1123";
  res.render('index', {title: 'express',team: "4456", layout: 'layouts/master'});
};

app.get('/', index);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + ';press Ctrl-C to terminate.');
});

