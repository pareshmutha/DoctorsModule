angular.module('doctorApp')

.controller('opdDiagnosisCtrl', function($scope, $stateParams,$http,$state,$ionicHistory,$ionicPopup) {
	$scope.checkedMed={};
	$scope.SelectedMedArray = [];
	$scope.medTimeMed={};
	$scope.pendingOpds=[
		{"date":"11/2/2016","pName":"Arun","desc":"Hand Pain"},
		{"date":"12/2/2016","pName":"Karan","desc":"Head ache"}
	]
	$scope.printMedicine=function(){
		console.log($scope.checkedMed);
		$scope.selectedMed();
	}
	$scope.showMedicine = function(){
		 $scope.listdata=["Nicip","Crocin","Combiflame","Digine"];
			 var listPopup = $ionicPopup.show({
			 template: '<ion-list>                                '+
					   '  <ion-checkbox ng-model="checkedMed[item]" ng-change="printMedicine()" ng-repeat="item in listdata"> '+
					   '    {{item}}                              '+
					   '  </ion-checkbox>                             '+
					   '</ion-list>                               ',
			 
			 title: 'List',
			 scope: $scope,
			 buttons: [
			   { text: 'Cancel' },
			   { text: 'Ok' },
			 ]
		   }); 
	 }
	 $scope.selectedMed=function(){
	 
		$scope.SelectedMedArray = [];
		for(i in $scope.checkedMed) {
			console.log($scope.checkedMed[i]);
			if($scope.checkedMed[i] == true) {
				$scope.SelectedMedArray.push(i);
			}
		}
		
		
	 }
	 $scope.medTimeMed.abc={"mor":"true"};
	 $scope.medTimeClicked=function(medname,time){
	  /*if(typeof $scope.medTimeMed.medname == 'undefined'){
		$scope.medTimeMed.medname={time:true};
	  }
	  else{
		if($scope.medTimeMed.medname.time==true){
			$scope.medTimeMed.medname.time=false;
		}
		else{
			$scope.medTimeMed.medname.time=true;
		}
		
	  }
	  console.log($scope.medTimeMed)*/
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



