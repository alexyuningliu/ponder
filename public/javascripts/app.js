// controllers for angular
var app = angular.module('Ponder', []);

app.controller('AnswerController', ["$scope", function ($scope) {
	$scope.text;
	$scope.byName;
	$scope.inCountry;
	$scope.submitAnswer = function() {
		console.log("Answer submitted!");
		$.post("submit", {
			text: $scope.text,
			byName: $scope.byName,
			inCountry: $scope.inCountry
		}, function(data) {
			console.log("Should be done")
		})
	}
}]);