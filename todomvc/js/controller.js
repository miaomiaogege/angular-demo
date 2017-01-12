(function(angular){
    var app =angular.module('myApp');
    // 配置路由
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/:status',{
            controller:'todoController',
            templateUrl:'tmpl'
        }).when('/',{
            controller:'todoController',
            templateUrl:'tmpl'
        });
    }]);
          

        app.controller('todoController',[
            '$scope',
            '$location',
            '$window',
            '$routeParams',
            'MyService',
            function ($scope,$location,$window,$routeParams,MyService) {
            $scope.tasks = MyService.get();

            $scope.newTasks='';
            //暴露一个行为模型：
            $scope.add=function(){
                if(!$scope.newTasks){return;}
                MyService.add($scope.newTasks);                
                $scope.newTasks='';
            }
            $scope.remove=MyService.remove;
            $scope.isEditingId=-1;
            $scope.edit=function(id){
                $scope.isEditingId=id; // 界面逻辑
            }

            $scope.save=function(){
                $scope.isEditingId=-1; // 界面逻辑
                MyService.save();
            }         
            var now=true;//相当于一个开关
            $scope.toggleAll=function(){
                MyService.toggleAll(now);
                now=!now;
            }
            $scope.$watch('tasks',function(now,old){                
                $scope.leftItem=MyService.unCompleted();     
                MyService.save();

            },true);
            $scope.clearCompleted=function(){               
                MyService.clearCompleted($scope.tasks);
                $scope.tasks=MyService.get();

            };
                $scope.isShow=function(){
                    return MyService.hasCompleted();
                }
            $scope.loca=$location;
            // console.log($location);
            $scope.$watch('loca.url()',function(now,old){
                switch(now){
                case '/#%2Factive':
                    $scope.isComplete={completed:false};
                break;
                case '/#%2Fcompleted':
                    $scope.isComplete={completed:true};
                break;
                default:
                    $scope.isComplete={};
                break;
            }
            });
        }]);
})(angular);