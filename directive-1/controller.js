var myApp = angular.module('app',[]);
myApp.controller('myCtrl1',['$scope',function ($scope) {
	 $scope.loadData = function(){
	 	console.log('loading...');
	 }
}]);
myApp.controller('myCtrl2',['$scope',function ($scope) {
	 $scope.loadData2 = function(){
	 	console.log('loading2...');
	 }
}])
myApp.directive('loader',function(){
	return {
		restrict:'AE',
		link:function(scope,element,attrs){
			element.bind('mouseenter',function(ev){
				scope.$apply(attrs.howtoload);
			});
		}
	}
}) 