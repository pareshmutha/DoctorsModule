angular.module('doctorApp')

.controller('pendingCertificateCtrl', function($scope, $stateParams,$http,$state,$ionicHistory) {
	
	$scope.certificateList=[
		{"reqdate":"11/2/2016","pName":"Arun"},
		{"reqdate":"12/2/2016","pName":"Karan"}
	]
	$scope.generateCertificate=function(){
		$state.go("app.generateCertificate");
	}
	$scope.loadOpdList=function(){
		/*
		var profileId={
			"patientid":localStorage.getItem("patientId")
		}
		 var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/getmydoctors',
			 data:profileId
			}
			$http(req).then(function(res){
				if(res.data.Data.length==0 || typeof res.data.Data.length == 'undefined'){
					alert("No Doctors..");
					$ionicHistory.nextViewOptions({
					  disableBack: true
					});
					$state.go('app.viewDoctor');	
					return;
				}
				else{
					  $scope.docList=res.data.Data;
					  $scope.loadComplaintList();
				}
			
			}, function(res){
				alert("Some Error Occured="+res);
			});
		
		*/
		
	}
	//$scope.loadOpdList();

	
  
})



