
//为了调试方便,暂时写在一起了.

var Sample = require('./models/sample')
var sampel_contorller = {};

//----------
//index
//----------
sampel_contorller.index = function(req, res){
  res.render('sample/', {layout: 'layouts/master'});
};

//----------
//read
//----------
sampel_contorller.read = function(req, res){
  res.render('sample/read', {layout: 'layouts/master'});
};

//----------
//delete
//----------
sampel_contorller.delete = function(req, res){
  res.render('sample/delete', {layout: 'layouts/master'});
};
//----------
//create
//----------
sampel_contorller.create = function(req, res){
  var sample = new Sample({name : req.name});
  sample.save();
  console.log("sample saved");
  res.redirect('302', 'sample/', {layout: 'layouts/master'});
};
sampel_contorller.save = function(req, res){
};
//----------
//update
//----------
sampel_contorller.edit = function(req, res){
  res.render('sample/edit');
};

sampel_contorller.update = function(req, res){
  for (var myarg in req) {
    console.log(myarg + "=" + req[myarg]);
  };
  console.log(typeof req.query);
  res.render('sample/edit');
};



//  #各种search create
//  #Sample.find
//  #Sample.findbyId
//  #Sample.findby
//  #Sample.where
//  #Sample.xxx

//  #各种update update/create/delete
//  #Sample.findxx_update
//  #Sample.create_multi
//  #Sample.findxx_delete



module.exports = function(app){
  var sample = require('./controllers/sample.js')
  app.get('/', sampel_contorller.index);
  app.post('/sample/delete', sampel_contorller.delete);
  app.get('/sample/read', sampel_contorller.read);

  app.get('/sample/edit', sampel_contorller.edit);
  app.post('/sample/update', sampel_contorller.update);

  app.get('/sample/create', sampel_contorller.create);
  app.post('/sample/save', sampel_contorller.save);


  //app.get('/model_method', sampel_contorller.formpost);
  //app.post('/find', sampel_contorller.form);
  //app.post('/findbyId', sampel_contorller.form);
  //app.post('/findbyxx', sampel_contorller.form);
  //app.post('/where', sampel_contorller.form);
  //app.post('/limit', sampel_contorller.form);
  //app.post('/where', sampel_contorller.form);
  //app.post('/xxx', sampel_contorller.form);
  //app.get('/model_method_result', sampel_contorller.formpost);
}

//./controllers/sample.ejs
//./models/sample.ejs
//
//./layouts/main.ejs
//
//./views/
//./read.ejs
//./index.ejs
//./edit.ejs
//./create.ejs
//
//





