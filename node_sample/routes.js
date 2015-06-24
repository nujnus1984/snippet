
module.exports = function(app){
  var sample = require('./controllers/sample.js')
  app.get('/', sample.index);
  app.get('/form', sample.form);
  app.get('/ngsample', sample.ngsample);
  app.post('/formpost', sample.formpost);

}
