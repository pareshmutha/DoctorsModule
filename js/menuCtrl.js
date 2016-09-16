angular.module('doctorApp')

.controller('menuCtrl', function($scope, $ionicModal, $timeout,$ionicPopup,$state) {
	$scope.logout=function(){
		$state.go('login');
	}
})



