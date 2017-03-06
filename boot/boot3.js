var myApp = angular.module('app',[]);
myApp.controller('myCtrl', ['$scope', function($scope){
	$scope.name = 'xiaomig';
}])





var box2 = document.getElementById('box2');
var myApp2 = angular.module('app2',[]);
myApp2.controller('myCtrl', ['$scope', function($scope){
	$scope.name2 = 'xiaomig';
}])

angular.element(document).ready(function(){
	angular.bootstrap(document,['app2']);
})