var app = angular.module('contactListApp',[]);

app.controller('contactlistCtrl', function($scope, $http){

	var refresh = function(){
		$http.get('/contactList').success(function(response){
			console.log('I got the data that requested');
			$scope.contactList = response;
			$scope.contact = "";
		});
	};

	refresh();

	$scope.addContact = function(){
		if(	$scope.contact != "" ){
			console.log($scope.contact);
			$http.post('/contactList', $scope.contact).success(function(response){
				console.log(response);
				refresh();
			});
		}else{
			alert('Enter atleast one field');
		}
	};

	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactList/' + id).success(function(){
			refresh();
		});
	};

	$scope.edit = function(id){
		console.log(id);
		$http.get('/contactList/' + id).success(function(response){
			$scope.contact = response;
		});
	};

	$scope.update = function(){
		console.log($scope.contact._id);
		$http.put('/contactList/' + $scope.contact._id, $scope.contact).success(function(response){
			refresh();
		});
	};

	$scope.clear = function(){
		$scope.contact = " ";
	}
});
