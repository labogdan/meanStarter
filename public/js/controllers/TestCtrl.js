angular.module('TestCtrl',[])
	.controller('TestController', TestController);

TestController.$inject = ['$scope'];

function TestController($scope) {
	$scope.message = 'Hello World!';
}
