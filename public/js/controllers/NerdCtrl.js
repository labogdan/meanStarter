angular.module('NerdCtrl',[])
	.controller('NerdController', NerdController );
	
NerdController.$inject = ['$scope'];

	function NerdController ($scope) {
		var self = this;
		
		$scope.var = "this is the nerd page";
		
		self.tagline = 'Nothing beats a pocket protector.';
	};