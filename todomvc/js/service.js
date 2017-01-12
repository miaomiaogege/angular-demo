(function(angular){
    //获取模块对象
    var app= angular.module('myApp');

    app.service('MyService',['$window',function($window){
        var storage =$window.localStorage;
        var str= storage.getItem('todos');
        var tasks= JSON.parse(str||'[]');
 
        this.get=function(){
            return tasks;
        }

        this.add=function(newTasks){
            var newId=1;
                if(tasks.length>0){
                    newId=tasks[tasks.length-1].id + 1
                }
                tasks.push({id:newId,name:newTasks,completed:false})
                this.save();
        }

        this.remove=function(id){
            for (var i = 0; i < tasks.length; i++) {
                    var item=tasks[i];
                    if(item.id==id){
                        tasks.splice(i,1);
                        this.save();
                        return;
                    }
            }
        }

        this.save=function(){
            storage.setItem('todos',JSON.stringify(tasks));
        }

        this.toggleAll=function(now){
            for (var i = 0; i < tasks.length; i++) {
                    var item=tasks[i];
                    item.completed=now;
                }
            this.save();
        }

        this.unCompleted=function(){    
            var leftItem=0;
            for (var i = 0; i < tasks.length; i++) {
                    var item=tasks[i];
                    if(!item.completed){
                        leftItem++;
                    }
                }
                return leftItem;
        }

        this.clearCompleted=function(scopeTasks){
            var temp=[];
                tasks.forEach(function(item){
                    if(!item.completed){
                            temp.push(item);
                    }
                })

            tasks=temp; 
            this.save();
        }

        this.hasCompleted=function(){
            for (var i=0;i< tasks.length; i++) {
                        var item =tasks[i];
                        if(item.completed){
                            return true;
                        }
                    }
            return false;
        }
    }]);
})(angular)