var app = angular.module('contactListApp',[]);

app.controller('contactlistCtrl', function($scope, $http){
	
	$http.get('/contactList').success(function(response){
		$scope.contactList = response;
		console.log('I got the data that requested');
	});
});

	