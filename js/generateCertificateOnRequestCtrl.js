angular.module('doctorApp')

.controller('generateCertificateOnRequestCtrl', function($scope,$stateParams,$http,$state,$ionicHistory) {
	
	$scope.generateCertificate=function(){
		$state.go('app.generateCertificateByRequest');
	}
	$scope.sendCertificateReq=function(cer){
		var profileId={
			"patientid":localStorage.getItem("patientId")
		}
		cer.patientId=localStorage.getItem("patientId");
		cer.doctorId=$scope.docId;
		 var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/requestcertificate',
			 data:cer
			}
			$http(req).then(function(res){
			   alert(res.data.Message);
			}, function(res){
				
			});
	}
	 
	 
})



