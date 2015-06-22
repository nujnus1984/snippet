

//如何自动加载controllers下的所有文件.
//和
//如何导出给index.js是个问题.

require ('./controllers/xxx')

module.exports = function(app){
app.get('/', todo.index);
app.post('/todo/new', todo.new);
app.get('/todo/:id', todo.view);
app.get('/todo/:id/edit', todo.edit);
app.post('/todo/:id/edit', todo.save);
app.get('/todo/:id/delete', todo.delete);
app.get('/todo/:id/finish', todo.finish);

}
//使用时 require(this_fil)(app); 即可.

