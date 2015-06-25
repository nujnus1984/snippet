
var mockers = require('../models/mock');

exports.index = function(req, res){
  res.render('index', {'mockers': mockers, layout: 'layouts/main'});
};

exports.form = function(req, res){
  res.render('form', {'mockers': mockers, layout: 'layouts/main'});
};

exports.mockone = function(req, res){
  res.render('mockone', {'mockers': mockers, layout: 'layouts/main'});
};

exports.mockupdate = function(req, res){
  res.render('mockupdate', {'mockers': mockers, layout: 'layouts/main'});
};



