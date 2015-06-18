

//内容渲染
//大多数情况下,
//渲染内容用res.render,

//它最大程度地根据布局渲染视图.
//如果想写一个快速测试页,
//也许会用到res.send.
//你可以用req.query得到查询字符串的值,
//使用req.session得到会话值,
//或使用req.cookie/req.singedCookies得到cookies值

//基本用法
app.get('/about', function(req, res){
  res.render('about');
});

//200以外的响应代码
app.get('/error', function(req, res){
  res.status(500);
  res.render('error');
});

app.get('/error', function(req, res){
  res.status(500).render('error');
});



//将上下文传递给视图,包括查询字符串,cookie和session值.
app.get('/greeting', function(req, res){
  res.render('about', {
    message: 'welcome',
    style: req.query.style,
    userid: req.cookie.userid,
    username: req.session.username,
  });
});


//没有布局的视图渲染
app.get('/no-layout', function(req, res){
  res.render('no-layout', {layout: null });
});

//使用定制布局渲染视图
app.get('/custom-layout', function(req, res){
  res.render('custom-layout', {layout: 'custom' });
});

//渲染纯文本输出
app.get('/test', function(req, res){
  res.type('text/plain');
  res.send('this is a test');
});

//添加错误处理程序
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).render('error');
});

