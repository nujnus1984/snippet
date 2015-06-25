


//创建文档

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Taskschema = new Schema({
  project: String,
  description: String,
});



//Schema#path(path, constructor) //这个path方法用于修改属性的类型，
//schema.path('name', Number) //修改name的数据类型
//如果要获取这个属性的数据类型，使用
//schema.path('name') // 返回一个 Schema的类型


//Schema#post(method, fn)
//var schema = new Schema(..);
//schema.post('save', function (doc) {
//  console.log('this fired after a document was saved');
//});
//
//var Model = mongoose.model('Model', schema);
//
//var m = new Model(..);
//m.save(function (err) {
//  console.log('this fires after the `post` hook');
//});




//UserSchema.static('methodname' function(){ return this.find({ name: name }, callback); });  //添加类方法
//UserSchema.method('methodname', function () { this.xxx = xxxx; this.save();})  // 实例方法


//model - 文档操作
//db.model("test1", TestSchema );       //构造函数, 参数1:集合名称, 参数2:Schema实例
//
//model.find({}, callback);             //查询, 参数1忽略,或为空对象则返回所有集合文档
//model.find({},field,callback);        //过滤查询,参数2: {’name’:1, 'age’:0} 查询文档的返回结果包含name , 不包含age.(_id默认是1)
//model.find({},null,{limit:20});       //过滤查询,参数3: 游标操作 limit限制返回结果数量为20个,如不足20个则返回所有.
//model.findOne({}, callback);          //查询找到的第一个文档
//model.findById('obj._id’, callback);  //查询找到的第一个文档,同上. 但是只接受 __id 的值查询
//;-------------------------------------------------------------
//Model.create(文档数据, callback))                  //创建, 在集合中创建一个文档
//Model.update(conditions, update, function(error)   //更新,参数1:查询条件, 参数2:更新对象,可以使用MondoDB的更新修改器
//Model.remove(conditions,callback);                 //删除, 参数1:查询条件
//
//;-------------------------------------------------------------
//Entity - 文档操作
//new TestModel( { name:’xueyou’, age:21 } );        //构造函数, 其实就是model的实例
//Entity.save(callback);                             //创建, 在集合中创建一个文档.



var Task = mongoose.model('Task', Taskschema);
module.exports = Task;
//mongodb搭建



