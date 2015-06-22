
# 摘录自:
# https://cnodejs.org/topic/504b4924e2b84515770103dd


############################################################################################################
###6.Query

查询是数据库中运用最多也是最麻烦的地方，这里对Query解读的并不完善，仅仅是自己的一点领悟而已。

####6.1 查询的方式

通常有2种查询方式，一种是直接查询，一种是链式查询（2种查询都是自己命名的）

#####6.1.1 直接查询

在查询时带有回调函数的，称之为直接查询，查询的条件往往通过API来设定，例如：

    PersonModel.findOne({'name.last':'dragon'},'some select',function(err,person){
      //如果err==null，则person就能取到数据
    });
具体的查询参数，请查询API

#####6.1.2 链式查询

在查询时候，不带回调，而查询条件通过API函数来制定，例如：

    var query = PersonModel.findOne({'name.last':'dragon'});
    query.select('some select');
    query.exec(function(err,pserson){
    //如果err==null，则person就能取到数据
  });
这种方式相对直接查询，分的比较明细，如果不带callback，则返回query，query没有执行的预编译查询语句，该query对象执行的方法都将返回自己，只有在执行exec方法时才执行查询，而且必须有回调。

因为query的操作始终返回自身，我们可以采用更形象的链式写法

    Person
      .find({ occupation: /host/ })
      .where('name.last').equals('Ghost')
      .where('age').gt(17).lt(66)
      .where('likes').in(['vaporizing', 'talking'])
      .limit(10)
      .sort('-occupation')
      .select('name occupation')
      .exec(callback);


############################################################################################################
###7.Validation

数据的存储是需要验证的，不是什么数据都能往数据库里丢或者显示到客户端的，数据的验证需要记住以下规则：

验证始终定义在SchemaType中
验证是一个内部中间件
验证是在一个Document被保存时默认启用的，除非你关闭验证
验证是异步递归的，如果你的SubDoc验证失败，Document也将无法保存
验证并不关心错误类型，而通过ValidationError这个对象可以访问
####7.1 验证器

required 非空验证
min/max 范围验证（边值验证）
enum/match 枚举验证/匹配验证
validate 自定义验证规则
以下是综合案例：

    var PersonSchema = new Schema({
      name:{
        type:'String',
        required:true //姓名非空
      },
      age:{
        type:'Nunmer',
        min:18,       //年龄最小18
        max:120     //年龄最大120
      },
      city:{
        type:'String',
        enum:['北京','上海']  //只能是北京、上海人
      },
      other:{
        type:'String',
        validate:[validator,err]  //validator是一个验证函数，err是验证失败的错误信息
      }
    });

####7.2 验证失败

如果验证失败，则会返回err信息，err是一个对象该对象属性如下

    err.errors                //错误集合（对象）
    err.errors.color          //错误属性(Schema的color属性)
    err.errors.color.message  //错误属性信息
    err.errors.path             //错误属性路径
    err.errors.type             //错误类型
    err.name                //错误名称
    err.message                 //错误消息
一旦验证失败，Model和Entity都将具有和err一样的errors属性

###8.Middleware中间件

####8.1 什么是中间件

中间件是一种控制函数，类似插件，能控制流程中的init、validate、save、remove`方法

####8.2 中间件的分类

中间件分为两类

#####8.2.1 Serial串行

串行使用pre方法，执行下一个方法使用next调用

    var schema = new Schema(...);
    schema.pre('save',function(next){
      //做点什么
      next();
    });
#####8.2.2 Parallel并行

并行提供更细粒度的操作

    var schema = new Schema(...);
    schema.pre('save',function(next,done){
      //下一个要执行的中间件并行执行
      next();
      doAsync(done);
    });
####8.3 中间件特点

一旦定义了中间件，就会在全部中间件执行完后执行其他操作，使用中间件可以雾化模型，避免异步操作的层层迭代嵌套

####8.4 使用范畴

复杂的验证
删除有主外关联的doc
异步默认
某个特定动作触发异步任务，例如触发自定义事件和通知
例如，可以用来做自定义错误处理

    schema.pre('save',function(next){
      var err = new Eerror('some err');
      next(err);
    });
    entity.save(function(err){
      console.log(err.message); //some err
    });
