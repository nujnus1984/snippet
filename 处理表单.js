//表单信息一般在req.body中(或者偶尔在req.query中).
//你可以通过调整req.xhr来判断AJAX请求还是普通请求.

//基本表单处理
app.post('/process-contact', function(req, res){
  console.log('Received  contact from' + req.body.name + '<' + req.body.email + '>');
  //保存到数据库...
  res.redirect(303, '/thank-you');
});

//更强大的表单处理
//必须引入中间件body-parser
app.post('/process-contact', function(req, res){
  console.log('Received contact from' + req.body.name + '<' + req.body.email + '>');
  try {
      return res.xhr?
      res.render({success: true});           //我想问,json和redirect一起使用是什么个情况
      res.redirect(303, '/thank-you');
  } catch(ex) {
    return res.xhr ?
      res.json ({error: 'Database error.'};  //我想问,json和redirect一起使用是什么个情况
      res.redirect(303, '/database-error');
  }
});



