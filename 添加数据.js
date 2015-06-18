
//首先要创建模式和模型(models/vacationInSeasonListener.js)
var mongoose = require('mongoose');

var vacationInSeasonListenerSchema = mongoose.Schema({
  email: String,
  skus: [String],
});

var VacationInSeasonListener = mongoose.model('VacationInSeasonListener', vacationInSeasonListenerSchema);

module.exports = VacationInSeasonListener;



//然后创建视图, (views/notify-me-when-in-season.handlebars)
<div class="formContainer"> //貌似是bootstrap的form
  <form class = "form-horzontal newsletterForm" role="form" action = "/notify-me-when-in-season" method = "post" > //路由
  <input type = "hidden" name = "sku" value = "{{sku}}">

  <div class = "form-group">
    <label for="fieldEmail" class="col-sm-2 control-label">Email</label>
    <div class = "col-sm-4">
      <input type = "email" class = "form-control" required id = "fieldName" name = "email"> //其实这id到底什么用, 不是很清楚
    </div>
  </div>

  <div class = "form-group">
    <div class = "col-sm-offset-2 col-sm-4">
      <button type="submit" class="btn btn-default">Submit</button>
    </div>
  </div>

</div>


//最后是处理路由器:


var VacationInSeasonListener = require('./models/vacationInSeasonListener.js'); //加载模型

app.get('notify-me-when-in-season', function(req, res){                         //显示表单的路由
  res.render('notify-me-when-in-season', {sku: req.query.sku });
});

app.post('/notify-me-when-in-season', function(req, res){                       //处理post请求的路由
  VacationInSeasonListener.update(
    { email: req.body.email },  //三个object
    { $push: { skus: req.body.sku }},
    { upsert: true },

    function(err){ //一个错误处理函数
      if(err){
        console.error(err.stack);
        req.session.flash = {
          type: ''
        };
        return res.redirect(303, '/vacations');
      }
      req.session.flash = { //修改请求的flash
        type: 'success',
        intro: 'Thank you!',
        message: 'You will be notified when this vacation is in season.',
      };
      return res.redirect(303, '/vacations');
    }
  );
});



