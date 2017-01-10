(function () {

    angular
        .module("turtleFacts")
        .controller("quizCntrl", quizControllerFun);

    quizControllerFun.$inject = ['quizMetrics', 'DataService'];
    function quizControllerFun(quizMetrics, DataService) {
        var self = this;
        this.quizMetrics = quizMetrics;
        this.dataservice = DataService;

        this.activeQuestion = 0;
        var num_ques_ans = 0;

        this.setActivateQuestion = function () {

            var breakOut = false;
            var quizLength = DataService.quizQuestions.length - 1;

            while (!breakOut) {
                self.activeQuestion = self.activeQuestion < quizLength ? ++self.activeQuestion : 0;
                if (DataService.quizQuestions[self.activeQuestion].selected === null) {
                    breakOut = true;
                }
            }
        }

        this.questionAnswered = function () {

            var quizLength = DataService.quizQuestions.length;
            if (DataService.quizQuestions[this.activeQuestion].selected !== null) {
                num_ques_ans++;
                if (num_ques_ans > quizLength) {

                }
            }

            self.setActivateQuestion();
        }
    }

})();