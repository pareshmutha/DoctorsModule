angular.module('doctorApp')

.controller('generateCertificateCtrl', function($scope,$stateParams,$http,$state,$ionicHistory) {
	

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



