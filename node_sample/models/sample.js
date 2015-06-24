



//创建文档
//xx.methods.xxxx = function () {  };
//xx.methods.xxxx = function () {  };
//xx.methods.xxxx = function () {  };

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Taskschema = new Schema({
  project: String,
  description: String,
});


var Task = mongoose.model('Task', Taskschema);

Taskschema.methods.new_xxx = function() {
  var task = new Task();     //这个很要紧
  task.project = 'bikeshed';
  task.description = 'paint the bideshed red.';
  task.save(function(err){   //save
    if(err) throw err;
    console.log('Task saved');
  });

};

//搜索文档
Taskschema.methods.find_xxx = function() {
  Task.find({project: 'bikeshed'}, function(err, tasks) {
    for (var i = 0 ; i < task.length ; i++) {
      console.log('--------------ID:' + tasks[i]._id);
    }
  });
};

//更新文档
Taskschema.methods.update_xxx = function() {
  Task.update {
    {_id: 'xxxxxxx'},
    {description: 'Paint the bidekajdljfa green'},
    {multi: false}, //只更新一个文档
    function(err, rows_updated){  //第二个惨素不知道是干什么的.
      if (err) throw err;
      console.log('Updated.');
    }
  }
};


//删除文档
Taskschema.methods.delete_xxx = function() {
  Task.findById('xxxxxxxxx', function(err, task){
    if (err) throw err;
    task.remove();
  });
};


//mongodb搭建

