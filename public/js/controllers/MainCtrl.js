angular.module('MainCtrl', [])
	.controller('MainController', function ($scope) {
		var self = this;
		$scope.var = "hello";
		self.tagline = 'To the moon and back';
	});