(function () {
    angular
        .module("turtleFacts")
        .controller("listCntrl", listControllerFun);

    listControllerFun.$inject = ['quizMetrics','DataService'];
    function listControllerFun(quizMetrics,DataService) {

        var self = this;

        this.quizMetrics = quizMetrics;
        this.listOfTurtles = DataService.turtlesData;
        this.search = "";
 
        this.changeActiveTurtle = function (turtle) {

            self.activeTurtle = turtle;
        }

        this.showViewQuiz = function () {
           
            self.quizMetrics.changeState(true);
        }
    }
})();
