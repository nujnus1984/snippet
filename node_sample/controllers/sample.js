
exports.index = function(req, res){
  res.locals.team = "1123";
  res.render('index', {title: 'express',team: "4456", layout: 'layouts/master'});
};

exports.form = function(req, res){
  res.locals.team = "1123";
  res.render('form', {title: 'express',team: "4456", layout: 'layouts/master'});
};

exports.ngsample = function(req, res){
  res.locals.team = "1123";
  res.render('ngapp', {title: 'express',team: "4456", layout: 'layouts/master'});
};

exports.formpost = function(req, res){
  res.locals.team = "1123";
  res.render('example', {title: 'express',team: "4456", layout: 'layouts/master'});
};


