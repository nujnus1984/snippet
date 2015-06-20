var ejs=require('ejs');
app.register('html', ejs); //同时支持html的设置

//注意点：为了在ejs中能使用.html，以下这句是关键，app.register()不能用了
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');//同时支持ejs
//app.set('view engine', {layout:false});//如果仅支持html 开启这个

默认layout.ejs
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title><%= titleitle %></title>
</head>
<body>
<!-- 局部引入 -->
<%- partial('header.ejs') %>
<!-- 主体-->
<%- body %>
</body>
</html>

index.ejs
<div><%= title %></div>

指定layout 比如 master.ejs
exports.index = function(req, res){
res.render('index', {title:'express',layout:'master.ejs'});
};
