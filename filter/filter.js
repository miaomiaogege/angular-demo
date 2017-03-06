var myApp  = angular.module('app',[]);
myApp.filter('filter1',function(){
	return function(item){
		return item + ' 你好 ';
	}
})