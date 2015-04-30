angular.module('NerdService', [])
	.factory('Nerd', Nerd);

	Nerd.$inject = ['$http'];
	
	function Nerd($http) {
		var self = this;
		
		var oPublic = {
				get : get
		};
		return oPublic;
		
		function get() {
			//return $http.get('api/nerds');
			return {'id1':{'firstName' : 'bob', 'lastName' : 'nerd'}};
		}
		
		function create(nerdData) {
			return $http.post('/api/nerds', nerdData);
		}
		
		function del(id) {
			return $http.delete('/api/nerds' + id);
		}
		
	}