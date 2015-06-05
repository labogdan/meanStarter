angular.module('appRoutes', [])
	.config(['$routeProvider', '$locationProvider', routes]);

function routes($routeProvider, $locationProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'MainController'
		})
		.when('/nerds', {
			templateUrl : 'views/nerd.html',
			controller : 'NerdController as foo'
		})
		.when('/test', {
			templateUrl : 'views/test.html',
			controller : 'TestController as myTest'
		});
	$locationProvider.html5Mode(true);
}