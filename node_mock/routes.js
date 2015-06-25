
module.exports = function(app){
  var mock = require('./controllers/mock_controller.js')
  app.get('/mock', mock.index);
  app.get('/mock/1', mock.form);
  app.get('/mockone', mock.mockone);
  app.post('/mockupdate', mock.mockupdate);

}
