var myApp = angular.module('app',[]);
myApp.controller('myCtrl', ['$scope', function($scope){
	$scope.name = 'xiaomig';
}])

// 手动启动
angular.element(document).ready(function(){
	angular.bootstrap(document,['app']);
})