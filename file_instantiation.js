
//二进制文件的信息,一般会存储在数据库里.以便排序之类的.

//一般来说,你不应该信任用户上传的任何东西.

//确保存在目录data
var dataDir = __dirname + '/data';
var vacationPhotoDir = dataDir + '/vacation-photo'
fs.existsSync(dataDir) || fs.mkdirSync(dataDir);  //如果不存在目录,就创建一个.
fs.existsSync(vacationPhotoDir) || fs.mkdirSync(vacationPhotoDir);  //如果不存在目录,就创建一个.


function saveContestEntry(contestName, email, year, month, photoPath) {
}

app.post('/contest/vacation-photo/:year/:month', function(req, res) {
  var form = new formidable.IncomingForm();      //创建一个Formidable的IncomingForm实例.


  form.parse(req, function(err,  fields, files){ //并调用他的parse方法, 传入req对象.
                                                 //表单处理对象, 有点像中间件, 感觉就是用来强化req的

    if(err) return res.redirect(303, '/error');  //303错误的话,重定位到/error

    if(err){                                     //如果错误
      res.session.flash = {                      //设定返回值的session的flash
        type: 'danger',
        intro: 'Oops!',
        message: 'There was an error processing your submission.' + 'Please try again.',
      };
      return res.redirect(303, '/contest/vacation-photo'); //303错误的话,重定位到/contest/vacation-photo
    }

    var photo = files.photo;                            //获取传入的文件的照片的引用
    var dir = vacationPhotoDir + '/' + Date.now();      //生成地址
    var path = dir + '/' + photo.name;

    fs.mkdirSync(dir);                                  //根据生成的地址创建目录

    fs.renameSync(photo.path, dir + '/' + photo.name);  //重命名目录

    saveContestEntry('vacation-photo', fields.email, req.params.year, req.params.month, path);

    req.session.flash = {                                //如果没错
      type: 'success',                                   //设定返回值的session的flash
      intro: 'Good luck!',
      message:  'You have been entered into the contest.',
    };
    return res.redirect(303, '/contest/vacation-photo/entries');
  });
});
