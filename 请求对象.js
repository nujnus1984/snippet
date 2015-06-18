
req.params                         //参数数组
req.param(name)
req.query                          //键值对存放的查询字符串参数,俗称get参数
req.body                           //一个对象, 包含POST请求参数, 用中间件能够解析请求正文内容类型
req.route                          //关于当前匹配路由的信息, //主要用于路由调试
req.cookies/req.singnedCookies     //一个对象,包含从客户端传来的cookies值
req.headers                        //从客户端接收到的请求报头
req.accepts([types])               //用来确定客户端是否接受一个或一组指定类型
req.ip                             //客户端ip地址
req.path                           //请求路径,不含协议,主机,端口或查询字符串
req.host                           //客户端所报告的主机名 (客户端可以伪造)
req.xhr                            //一个简便属性, 如果请求由Ajax发起将会返回true
req.protocol                       //用于标识请求的协议(http或https).

req.secure                         //一个简便属性,如果连接是安全的,将返回true. 等同于req.protocol === 'https'.
req.url/req.originalUrl            //有点用词不当,这些属性返回了路径和查询字符串(它们不包含协议,主机或端口)
                                   //req.url有时候会重写, originalUrl则不会

req.acceptedLanguages              //一个简便的方法, 用来返回客户端首选的一组语言.这些信息是从请求报头中解析而来的.



