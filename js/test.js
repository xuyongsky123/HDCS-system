var app = angular.module("app", []);
app.controller("ctrl", function($scope){
	$scope.test = 'tt';
	console.log($scope.test)
});


$(function(){

	$('#test').val('ttt')

});