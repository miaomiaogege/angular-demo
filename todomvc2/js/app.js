(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	angular.module('myApp',[])
	.controller('todoController', ['$scope', function($scope){
		var data=[
            {id:1,name:'学习',completed:true},
            {id:2,name:'吃饭',completed:false},
            {id:3,name:'敲代码',completed:true},
            {id:4,name:'睡觉',completed:false},
            {id:5,name:'起床',completed:true},
            ];
        // 展示    
        $scope.tasks = data;    
        // 添加
        $scope.newTasks ='';
        $scope.add=function(){
        	if(!$scope.newTasks){return;}
        	var newId =1;
        	if($scope.tasks.length>0){
        		newId=$scope.tasks[$scope.tasks.length-1].id;	
        	}
        	$scope.tasks.push({id:newId,name:$scope.newTasks,completed:false});
        	
        	$scope.newTasks='';
        } 
        // 删除
        $scope.remove=function(id){
        	console.log($scope.tasks); 
        	for (var i = 0; i < $scope.tasks.length; i++) {
        		var item=$scope.tasks[i];
        		if(item.id==id){
        			$scope.tasks.splice(i,1);
        			return;
        		}
        	}
        }
        // 修改
        $scope.isEditingId = -1;
        $scope.edit = function(id){
            $scope.isEditingId = id
        }
        // 修改保存
        $scope.save=function(){
            $scope.isEditingId = -1
        }
        // 批量切换任务
        var now = true;
        $scope.toggleAll=function(){
            for (var i = 0; i < $scope.tasks.length; i++) {
                var item= $scope.tasks[i];
                item.completed =now;
            }
            now = !now
        }
        // 显示未完成数量
        $scope.leftItem = 0;
        $scope.$watch('tasks',function(now,old){
            $scope.leftItem = 0;
            for (var i = 0; i < $scope.tasks.length; i++) {
                var item = $scope.tasks[i];
                if(!item.completed){
                    $scope.leftItem++;
                }
            }
        },true)

        // 清除已完成
        $scope.clearCompleted=function(){
            var temp = [];
            for (var i = 0; i < $scope.tasks.length; i++) {
                var item = $scope.tasks[i];
                if(!item.completed){
                    temp.push(item);
                }
            }
            $scope.tasks = temp;            
        };        
        // 判断是否有完成任务显示按钮
        $scope.isShow =function(){
            for (var i = 0; i < $scope.tasks.length; i++) {
                var item=$scope.tasks[i];
                if(item.completed){
                    return true;
                }
            }
            return false
        }
        $scope.isCompleted = {};

        // 为完成
        $scope.active = function(){
            $scope.isCompleted = {completed:false};   
        }   

        // 已完成
        $scope.isComplete = function(){
            $scope.isCompleted = {completed:true};
        }      
        
        // 全
        $scope.all = function(){
            $scope.isCompleted = {completed:undefined};
        }

	}])
})(window);
