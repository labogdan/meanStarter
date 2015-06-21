describe("My first test", function () {
	it("should be true", function () {
		expect(true).toBe(true);
	});
});

describe("test module", function () {
	beforeEach(module("sampleApp"));
	
	describe("TestCtrl", function () {
		var scope,
			controller;
		
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller;
		}));
		
		it("should assign message to hello world", function () {
			controller("TestController", {$scope : scope});
			expect(scope.message).toBe("Hello World!");
		});
	
	});
});