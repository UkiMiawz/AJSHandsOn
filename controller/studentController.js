mainApp.controller("studentController", function($scope){
    $scope.student = {
        firstName: "Test1",
        lastName: "Test",
        fees: 500,
        subjects:[
            {name: "Physics", marks:70},
            {name: "Chemistry", marks:70},
            {name: "Math", marks:70}
        ],
        fullName: function(){
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    }
})