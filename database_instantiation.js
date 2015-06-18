//<<node 与 express 开发>>page 128
//javascript的优势之一是它的对象模型极其灵活.
//如果你想给一个对象添加属性或方法, 尽管去做.
//并且不用担心要修改类.
//可惜, 那种随心所欲的灵活性可能会对数据库产生负面影响.
//因为它们会变得零碎和难以调优.
//Mongoose试图确立平衡,
//它引入了模式和模型.
//模式很灵活, 但仍为数据库提供了一些必要的结构.

//然后将数据库凭证添加到credentials.js
mongo: {
  development: {
    connectionString: 'your_dev_connection_string',
  },
  production: {
    connectionString: 'your_production_connection_string',
  },
},

//mongodb连接URI(以mongodb://开头)
var mongoose = require('mongoose');
var opts = {
  server: {
    socketOptions: { keepAlive: 1}
  }
};

switch(app.get('env')){
  case 'development':
    mongoose.connect(credentials.mongo.development.connectionString, opts);
    break;
  case 'production':
    mongoose.connect(credentials.mongo.production.connectionString, opts);
    break;
  default:
    throw new Error('Unknown execution environment:' + app.get('env'));
}

//opts对象是可选的.但指定keepAlive选项,可以防止长期运行的程序,出现数据库连接错误.



//创建模式和模型

var mongoose = require('mongoose');

var vacationSchema = mongoose.Schema({
  name: String,
  slug: String,
  category: String,
  sku: String,
  description: String,
  priceInCents: Number,
  tags: [String],
  inSeason: Boolean,
  available: Boolean,
  requiresWaiver: Boolean,
  maximumGuests: Number,
  notes: String,
  packagesSold: Number,
}); //声明了vacation模型的属性, 以及各个属性的类型.

vacationSchema.methods.getDisplayPrice = function() {  //添加了方法getDisplayPrice, 以便得到恰当的价格显示
  return '$' + (this.priceInCents / 100).toFixed(2);
};
var Vacation = mongoose.model('Vacation', vacationSchema);  //只要有了模式, 我们就可以用mongoose.model创建模型.
                                                            //Vacation非常像传统的面向对象编程中的类.
module.exports = Vacation;

//我们输出了Mongoose创建的Vacation模型对象. 要在程序中使用这个模型, 我们可以像下面这样引入它:

var Vacation = require('./models/vacation.js')



