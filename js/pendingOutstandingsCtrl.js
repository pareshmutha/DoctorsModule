angular.module('doctorApp')

.controller('pendingOutstandingsCtrl', function($scope, $stateParams,$http,$state,$ionicHistory) {
	
	$scope.pendingOutstandings=[
		{"pName":"Arun","mobileNo":"1234567890","feesCharged":"500","feespaid":"200","outstandings":"300"},
		{"pName":"Karan","mobileNo":"1234567890","feesCharged":"600","feespaid":"200","outstandings":"400"},
		
	]
	
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



