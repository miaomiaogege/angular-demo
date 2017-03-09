var myApp = angular.module('app',[]);
// compile 执行一次
// link 执行多次
myApp.directive('repeater',function(){
	return {
		restrict:'AE',
		compile:function(ele,attrs,transclude){
			console.log('compile...');
			var tpl = ele.children().clone();
			for(var i=0;i<attrs.repeater-1;i++){
				ele.append(tpl.clone());
			}
			// 返回 link 函数
			return function(scope,ele,attrs,controller){
				console.log('compile2..link..')
			}
		}
	}
})