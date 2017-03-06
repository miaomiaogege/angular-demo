var myApp = angular.module('app',[])
myApp.directive('hello',function(){
	return {
		restrict:'AEMC',
		templateUrl:'tmpl.html',
		replace:true
	}
})