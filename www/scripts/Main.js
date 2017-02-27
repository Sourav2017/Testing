var TaleCare = angular.module("TaleCare", ['ngRoute','ngCookies','TaleCare.controllers','TaleCare.services']);
 TaleCare.run(function($rootScope,CookieService,$location) {
    /* $rootScope.test = "rootscope variable";
	$rootScope.isLogin = false;
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
        .when('/adduser', {
            templateUrl: 'template/Registration.html',
            controller: 'RegistrationCon'
        })
		.when('/addsales', {
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
            redirectTo: '/signin'
        });
});


TaleCare.controller('mainController', function($scope,$location,$rootScope) {
	
	//$location.path("/signin");

	
	//Test();
	
    /* $scope.students = [
        {name: 'Mark Waugh', city:'New York'},
        {name: 'Steve Jonathan', city:'London'},
        {name: 'John Marcus', city:'Paris'}
    ];
	$scope.submit = function(){
		//$root.isLogin=true;
		//if($scope.uid == "admin" && $scope.pwd=="admin"){
			//$cookies.put('myFavorite', 'oatmeal');
			//alert(2);
			//$location.path("/home");
			$rootScope.isLogin = true;
			//$rootScope.test = "ok";
			$rootScope.uid = $scope.uid;
			$location.path("/home")
		//}
	}
    $scope.message = "Click on the hyper link to view the students list."; */
	
	
	
});


/* TaleCare.service('CookieService', function ($cookieStore) {
	
	 this.addToCookie = function(userName,password) {
		//$cookieStore.put('userName', userName);
	};
	
	this.getFromCookie = function() {
		//var userName = $cookieStore.get('userName');
		//return userName;
		alert(1);
	};
	
	this.removeFromCookie = function() {
		//$cookieStore.remove('userName');
	} 
	
}); */

