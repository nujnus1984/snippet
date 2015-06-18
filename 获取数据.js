//我们已经见过find方法了,
//这次我们准备传给find一个选项来过滤数据.
//我们只想显示目前能够提供的度假产品.

//给产品页创建一个视图, views/vacations.handlebars:

<h1>Vacations</h1>
{{#each vacations}}
  <div class = "vacation">
    <h3>{{name}}</h3>
    <p>{{description}}</p>
    {{# if inSeason}}
      <span class = "price"> {{price}} </span>
      <a href = "/cart/add?sku={{sku}}" class="btn btn-default">Buy Now!</a>
    {{else}}
      <span class = "outOfSeason">We're sorry, this vacation is currently not in season.
      {{! The "notify me when this vacation is in season" page will be our next task.}}
      <a href="/notify-me-when-in-season?sku={{sku}}">Notify me when this vacation is in season.</a>
    {{/if}}
  </div>
{{/each}}

//现在我们可以创建路由处理器把它全串起来:

//这里路由和处理器写在了一起:
app.get('/vacations', function(req,res){
  Vacation.find({available: true}, function(err, vacations){
    var context = {
      vacations: vacations.map(function(vacation){ //将vacations  进行map变换.
        return {
          sku: vacation.sku,
          name: vacation.name,
          description: vacation.description,
          price: vacation.getDisplayPrice,
          inSeason: vacation.inSeason,
        }
      })
    };
    res.render('vacations', context);  //将context渲染出来
  });
});
