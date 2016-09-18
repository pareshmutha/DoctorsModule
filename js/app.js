angular.module('doctorApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {


$ionicConfigProvider.navBar.alignTitle('center');
  $stateProvider
   .state('login', {  
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
    })
	.state('changePassword', {  
		url: '/changePassword:username',
		templateUrl: 'templates/changePassword.html',
		controller: 'changePasswordCtrl'
    })
	.state('forgotPassword', {  
		url: '/forgotPassword',
		templateUrl: 'templates/forgotPassword.html',
		controller: 'forgotPasswordCtrl'
    })
	.state('OTP', {  
		url: '/otp:mobilenumber',
		templateUrl: 'templates/otp.html',
		controller: 'otpCtrl'
    })
	.state('register', {  
		url: '/register',
		templateUrl: 'templates/register.html',
		controller: 'registerCtrl'
    })
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
	controller: 'menuCtrl'
	
    
  })
	.state('app.dashboard', {
		url: '/dashboard',
		views: {
		  'menuContent': {
			templateUrl: 'templates/dashboard.html',
			controller: 'menuCtrl'
		  }
		}
		
		
	  })
	  .state('app.profile', {
		url: '/profile',
		views: {
		  'menuContent': {
			templateUrl: 'templates/profile.html',
			controller: 'viewProfileCtrl'
		  }
		}
		
		
	  })
	 .state('app.changePassword', {
    url: '/profileChangePassword',
    views: {
      'menuContent': {
        templateUrl: 'templates/profileChangePassword.html',
		controller: 'changePasswordCtrl'
      }
    }
  })
  .state('app.pendingOpd', {
    url: '/pendingOpd',
    views: {
      'menuContent': {
        templateUrl: 'templates/pendingOpd.html',
		controller: 'pendingOpdCtrl'
      }
    }
  })
 .state('app.pendingOutstandings', {
    url: '/pendingOutstandings',
    views: {
      'menuContent': {
        templateUrl: 'templates/pendingOutstandings.html',
		controller: 'pendingOutstandingsCtrl'
      }
    }
  })
 .state('app.viewPatient', {
    url: '/viewPatient',
    views: {
      'menuContent': {
        templateUrl: 'templates/viewPatient.html',
		controller: 'viewPatientCtrl'
      }
    }
  })
  .state('app.addPatient', {
    url: '/addPatient',
    views: {
      'menuContent': {
        templateUrl: 'templates/addPatient.html',
		controller: 'addPatientCtrl'
      }
    }
  })
.state('app.pendingCertificate', {
    url: '/pendingCertificate',
    views: {
      'menuContent': {
        templateUrl: 'templates/pendingCertificate.html',
		controller: 'pendingCertificateCtrl'
      }
    }
  })
 .state('app.generateCertificate', {
    url: '/generateCertificate',
    views: {
      'menuContent': {
        templateUrl: 'templates/generateCertificate.html',
		controller: 'generateCertificateCtrl'
      }
    }
  })
  .state('app.generateCertificateOnRequest', {
    url: '/generateCertificateOnRequest',
    views: {
      'menuContent': {
        templateUrl: 'templates/generateCertificateOnRequest.html',
		controller: 'generateCertificateOnRequestCtrl'
      }
    }
  })
  .state('app.generateCertificateByRequest', {
    url: '/generateCertificateByRequest',
    views: {
      'menuContent': {
        templateUrl: 'templates/generateCertificateByRequest.html',
		controller: 'generateCertificateByRequestCtrl'
      }
    }
  })
  .state('app.pendingOpdDetails', {
    url: '/pendingOpdDetails',
    views: {
      'menuContent': {
        templateUrl: 'templates/pendingOpdDetails.html',
		controller: 'pendingOpdDetailsCtrl'
      }
    }
  })
  .state('app.opdDiagnosis', {
    url: '/opdDiagnosis',
    views: {
      'menuContent': {
        templateUrl: 'templates/opdDiagnosis.html',
		controller: 'opdDiagnosisCtrl'
      }
    }
  })
  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
