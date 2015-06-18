

//http://stackoverflow.com/questions/25366412/using-express-handlebars-and-angular-js

Your first solution is possible, AngularJS allow to change the start/end symbols of text interpolation like this:

appModule.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});
Then you could use it in your template:

<div>{[{message}]}</div>
Also see: $interpolateProvider documentation

Hope this helps.

