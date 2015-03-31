// controllers for angular
var app = angular.module('Ponder', []);

app.controller('AnswerController', function ($scope, $http) {
	$scope.text;
	$scope.byName;
	$scope.inCountry;
	$scope.answerData = {};
	$scope.submitAnswer = function() {
		console.log("Answer submitted!");
		$.post("answer", {
			text: $scope.text,
			byName: $scope.byName,
			inCountry: $scope.inCountry
		}, function(data) {
			console.log("Should be done")
		})
	}

	$http.get('answer')
		.success(function(data) {
			$scope.answerData = data;
		})
		.error(function(error) {
			console.log('Error: ' + error);
		})
});