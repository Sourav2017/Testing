var TaleCare = angular.module("TaleCare", ['ngRoute','ngCookies']);
 TaleCare.run(function($rootScope,$location) {
     $rootScope.test = "rootscope variable";
	/*$rootScope.isLogin = false;
	$rootScope.uid = ""; */
	$rootScope.loggedIn = false;

	$rootScope.$on('$routeChangeStart', function (event, toState, toParams, fromState, fromParams) {
	  	
	  	
	  	if(!CookieService.userexistCookie()){
	  		if(toState.originalPath != '/registraion'){
	  			$location.path("/signin");			
	  		}
		}
		else{
			if(toState.originalPath == '/signin' || toState.originalPath == '/registraion'){
	  			$location.path("/dashboard");			
	  		}
		}
});

	
	
})

TaleCare.config(function($routeProvider) {
    $routeProvider
        .when('/signin', {
            templateUrl: 'template/Signin.html',
            controller: 'Logincon'
        })
        .when('/registraion', {
            templateUrl: 'template/Registration.html',
            controller: 'RegistrationCon'
        })
		.when('/dashboard', {
            templateUrl: 'template/Dashboard.html',
            controller: 'dashboardCon'
        })
        .when('/profile', {
            templateUrl: 'template/profile.html',
            controller: 'profileCon'
        })
		.when('/Home', {
            templateUrl: 'template/Home.html',
            controller: 'mainController'
        })
        .when('/dashboard:param1', {
		    templateUrl: 'template/billhistory.html',    
		    controller: 'billhistoryCon'
		})
		.when('/viewBill:param1', {
		    templateUrl: 'template/viewBillDetail.html',    
		    controller: 'viewBillCon'
		})
		.when('/serviceRqst', {
		    templateUrl: 'template/serviceReqst.html',    
		    controller: 'serviceReqstCon'
		})
		.when('/detaildService', {
		    templateUrl: 'template/detaildServcrqst.html',    
		    controller: 'detaildServcrqsttCon'
		})
		.when('/recharge', {
		    templateUrl: 'template/Recharge.html',    
		    controller: 'RechargeCon'
		})
		.when('/rechargeDetails', {
		    templateUrl: 'template/rechargeDetails.html',    
		    controller: 'rechargeDetailsCon'
		})
		.when('/checkout', {
		    templateUrl: 'template/checkout.html',    
		    controller: 'checkoutCon'
		})
        .otherwise({
            redirectTo: '/Home'
        });
});


TaleCare.controller('mainController', function($scope,$location,$rootScope) {
	
	
	
	
});


