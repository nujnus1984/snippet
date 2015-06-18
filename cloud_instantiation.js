//云存储越来越流行
//强烈建议你利用这些又好用又便宜的服务.
//这里有一个将文件保存到亚马逊S3帐号的例子, 看看多容易吧:

var filename = 'customerUpload.jpg'

aws.putObject({
  ACL: 'private',
  Bucket: 'uploads',
  Key: filename,
  Body: fs.readFileSync(__dirname + '/tmp/' + filename)
});

//要了解更多信息, 请查阅AWS SDK文档 (http://aws.amazon.com/sdkformnodejs).

//------------------------------------------
//还有一个用微软Azure完成相同任务的例子:
var filename = 'customerUpload.jpg';
var blobService = azure.createBlobService();
blobService.putBlobFromFile('uploads', filename, __dirname + '/tmp/' + filename);

