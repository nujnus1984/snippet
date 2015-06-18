
//<<node与express开发>> 第15章

 //简单的GET节点, 只返回JSON数据
app.get('/api/tours', function(req, res){
});

//用于更新的PUT节点
app.put('/api/tours/:id', function(req, res){
});

//用于删除的DEL节点
app.del('/api/tours/:id', function(req, res){
});

//创建节点怎么说?
