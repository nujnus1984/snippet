//http://outofmemory.cn/code-snippet/5519/JavaScript-array-iterate-qi

function createIterator(x) {
    var i = 0;

     return function(){
       return x[i++];
    };
}

var iterator=createIterator(['a','b','c','d','e','f','g']);
var current;
while(current=iterator())
{
    console.log(current);
}
