angular.module('TestService',[])
	.factory('SimpleService', SimpleService);

function SimpleService () {
	var service = {
			getData : function() {
				return[{
					id : 1,
					name : 'Andy'
				}];
			}
	};
	return service;
}