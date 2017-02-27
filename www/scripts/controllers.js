
var controllerModule = angular.module('TaleCare.controllers', []);
controllerModule.controller('controllers', function ($scope,$http,CookieService) {
	
	
	CookieService.getFromCookie();
	if (typeof(Storage) !== "undefined") {
    // Store
	//alert(localStorage.getItem("lastname").name);
	//console.

	/* var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));


// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject).one); */
	
	
	
    // Retrieve
   // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    //document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
	
});

controllerModule.controller('Logincon', function ($scope,$http,CookieService,$location,$rootScope) {
	$scope.forgetpasswordshow = false;
	$scope.passwordsuccess = false;
	
	$scope.login = function(login){
		
		if(CookieService.getUserExist(login.username)){
				
				var userdetails = CookieService.getUserStorage(login.username);
				if(userdetails.password == login.password){
					$rootScope.loggedIn = true;	
					$rootScope.username = userdetails.firstName;
					
					$rootScope.usercode = login.username;	
					CookieService.addToCookie(userdetails.firstName,login.username);
					$location.path("/dashboard");		
				}
				else{

					alert('wrong password');	
				}
			}	
			else{

				alert('wrong user name');		
			}
	}
	
	$scope.forgetPWD = function(bool){
		$scope.forgetpasswordshow = bool;	
	}
	$scope.foergetsubmit = function(forget){
			if(CookieService.getUserExist(forget.username)){
				
				$scope.passwordsuccess = true;
				$scope.forgetpassword = CookieService.getUserStorage(forget.username).password;
				
				//CookieService.addTouserStorage(username,registartion);							
			}	

			//alert(CookieService.getUserStorage(registartion.firstName).firstName);
	}
	
});

controllerModule.controller('RegistrationCon', function ($scope,$http,CookieService,$rootScope,$location) {
	
	$scope.reg= "";
	$scope.stepinitial= true;
	$scope.validationreg = true;

	$scope.registartionstep1 = function(registartion){

			var username = registartion.firstName + "_" + Math.floor(Math.random() * 1000);

			//CookieService.getUserStorage(username);	
	
			if(!CookieService.getUserExist(username)){

				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    			var isemailvalid =  re.test(registartion.email);
    			var iscontactvalid = /^\d+$/.test(registartion.contact);
    			var pattern = /^[a-z]+$/i;
    			var isfirstNamevalid = false;
    			var islasttNamevalid = false;
    			var isaddressvalid = false;
    			
    			if(registartion.firstName != null){
    				isfirstNamevalid = pattern.test(registartion.firstName);	
    			}
    			if(registartion.lasttName != null){
    				islasttNamevalid = pattern.test(registartion.lasttName);	
    			}
    			if(registartion.address != null){
    				isaddressvalid = pattern.test(registartion.address);	
    			}
    			
    			
    			if(isemailvalid && iscontactvalid && isfirstNamevalid && islasttNamevalid && isaddressvalid){
    				registartion.username = username;
					$scope.reg= registartion;	
					$scope.validationreg = true;
					$scope.stepinitial= false;	
    			}
    			else{
    				$scope.validationreg = false;
    			}
    			

				
				//$scope.stepinitial= false;
				//CookieService.addTouserStorage(username,registartion);							
			}	

			//alert(CookieService.getUserStorage(registartion.firstName).firstName);
			
	}

	$scope.registartionstep2 = function(registartion){


			//CookieService.getUserStorage(username);	

			if(!CookieService.getUserExist(registartion.username)){
				//registartion.username = username;
				console.dir(registartion);
				CookieService.addTouserStorage(registartion.username,registartion);	
					$rootScope.loggedIn = true;	
					$rootScope.username = registartion.firstName;
					
					$rootScope.usercode = registartion.username;	
					CookieService.addToCookie(registartion.firstName,registartion.username);
					$location.path("/dashboard");		
										
			}	

			//alert(CookieService.getUserStorage(registartion.firstName).firstName);
			
	}

	
	
	
});


controllerModule.controller('dashboardCon', function ($rootScope,$scope,$http,CookieService,$location) {

	var userProfile = CookieService.getFromCookie();
	
	var userdetails = CookieService.getUserStorage(userProfile.userCode);
	
	$scope.contactNum = userdetails.contact;

	$scope.acctNo = "AC00001";
	$scope.balanceDue = "2500";
	$scope.dueDate = "07/16/2016";

	
	$scope.billHistoty = function(){
		var histortybill = "/dashboard:"+userProfile.userCode;
		$location.path(histortybill);	
	}
	$scope.Viewbill = function(bill){
		$rootScope.viewBill = bill;
		
		var viewBillurl = "/viewBill:"+bill ;
		$location.path(viewBillurl);
	}
	$scope.checkout = function(){
		$location.path("/checkout");		
	}

	

	});

controllerModule.controller('profileCon', function ($rootScope,$scope,$http,CookieService,$location) {

	var userProfile = CookieService.getFromCookie();
	
	var userdetails = CookieService.getUserStorage(userProfile.userCode);
				$scope.profileData = userdetails;
				
				console.dir($scope.profileData);

	$scope.toggleProfileView = true;			
	$scope.submitProfile = function(profileData){

			

			//CookieService.getUserStorage(username);	
			if(CookieService.getUserExist(userProfile.userCode)){
				profileData.password = userdetails.password;
				CookieService.addTouserStorage(userProfile.userCode,profileData);
				CookieService.addToCookie(profileData.firstName,userProfile.userCode);
				$location.path("/dashboard");		

			}	

			//alert(CookieService.getUserStorage(registartion.firstName).firstName);
			
	}
	$scope.editProfile = function(){
		$scope.toggleProfileView = false;
	}


	});

controllerModule.controller('billhistoryCon', function ($rootScope,$scope,$http,CookieService,$location) {
	$scope.billhistory = [

	{
		billperiod:'01/04/2016 - 30/06/2016',
		billAmount:'1456'
	},
	{
		billperiod:'01/02/2016 - 30/04/2016',
		billAmount:'800'
	},
	{
		billperiod:'01/12/2015 - 29/02/2016',
		billAmount:'2156'
	},
	{
		billperiod:'01/09/2015 - 30/11/2015',
		billAmount:'2100'
	},
	{
		billperiod:'01/06/2015 - 31/08/2015',
		billAmount:'2897'
	}

	]


	$scope.paymenthistory = [

	{
		paymentAmount:'1456',
		billperiod:'01/04/2016 - 30/06/2016',
		paymentDate:'01/07/2016'
	},
	{
		paymentAmount:'800',
		billperiod:'01/02/2016 - 30/04/2016',
		paymentDate:'01/05/2016'
	},
	{
		paymentAmount:'2156',
		billperiod:'01/12/2015 - 29/02/2016',
		paymentDate:'01/03/2016'
	},
	{
		paymentAmount:'2100',
		billperiod:'01/09/2015 - 30/11/2015',
		paymentDate:'01/12/2015'
	},
	{
		paymentAmount:'2897',
		billperiod:'01/06/2015 - 31/08/2015',
		paymentDate:'01/09/2016'
	}

	]








});

controllerModule.controller('headerCon', function ($rootScope,$scope,$http,CookieService,$location) {

	$scope.headershowHide = function(){
				if(CookieService.userexistCookie()){
					$scope.userCookie = CookieService.getFromCookie();
					//console.dir($scope.userCookie);
			}
				return CookieService.userexistCookie();
		}
		
$scope.clearCookie = function(){
			CookieService.removeFromCookie();
			$location.path("/signin");
	}

	});

controllerModule.controller('viewBillCon', function ($scope, $rootScope, $document,$location,$routeParams) {
		
		var totalbill = $routeParams.param1;
		console.dir($routeParams);
		totalbill = totalbill.substr(1,totalbill.length);
		$scope.total = totalbill;
		$scope.Tax = totalbill * .15;
		totalbill = totalbill - Math.round((totalbill * .15));
		
		$scope.data = Math.round((totalbill / 3) * 2);
		
		var remaining = totalbill - $scope.data;
		var linevoice = remaining / 2;
	    $scope.lineRental = Math.round(linevoice + (linevoice/2));
	    $scope.voice = Math.round(linevoice / 2);

	});

controllerModule.controller('serviceReqstCon', function ($scope, $rootScope, CookieService,$document,$location,$routeParams) {
		$scope.service = ['a','b','c'];

		$scope.service = [

	{
		name:'Customer Account'
	},
	{
		name:'Payment Related'
	},
	{
		name:'Other services'
	}
	]

var userProfile = CookieService.getFromCookie();
	

	$scope.alternetinputmend = true;
	$scope.serviceemailmend = true;
	$scope.serviccontactmend = true;
	$scope.selectionChange = true;
	$scope.requestIdShow = true;
	//$scope.requestenabl = true;

	var userdetails = CookieService.getUserStorage(userProfile.userCode);
	
	console.dir(userdetails);
	$scope.serviceemail = userdetails.email;
	$scope.serviccontact = userdetails.contact;

	$scope.selectionChange = function(selectedItem){
		$scope.selectedName= selectedItem.name
		console.log(selectedItem.name);
	}
	$scope.viewRqst = function(){
	
		$location.path("/detaildService");
	

	}


	$scope.submitRqst = function(){
		var isvalid =true;

if($scope.alternetinput == null){
	$scope.alternetinputmend = false;
	isvalid =false;
}
if($scope.serviceemail == null){
	$scope.serviceemailmend = false;
	isvalid =false;

}
if($scope.serviccontact == null){
	$scope.serviccontactmend = false;
	isvalid =false;

}
if($scope.selectedName == null){
	$scope.selectionChange = false;
	isvalid =false;
}

if(isvalid){
	var serviceData = new Object();
	serviceData.catagory = $scope.selectedName;
	serviceData.Email = $scope.serviceemail;
	serviceData.Contact = $scope.serviccontact;
	serviceData.isuue = $scope.alternetinput;
	serviceData.loggeddate = Date();
	serviceData.requestId = userProfile.userCode + "service" + Math.floor(Math.random() * 1000);
	
	$scope.requestId = serviceData.requestId;
	//$scope.requestIdShow = false;
	CookieService.addTouserStorage(serviceData.requestId,serviceData);	

	console.dir(serviceData);

	for(var i=0;i <100;i++){
		
		if(!CookieService.getUserExist("custservRqst_" + userProfile.userCode + "_"+i)){
			CookieService.addTouserStorage("custservRqst_" + userProfile.userCode+"_"+i,serviceData);					
			i=100;
		}	

	}	
	$scope.requestenabl = false;
	$scope.serviceDeatils =[];
	
	for(var i=0;i <100;i++){
		if(CookieService.getUserExist("custservRqst_" + userProfile.userCode + "_"+i)){
			$scope.serviceDeatils.push(CookieService.getUserStorage("custservRqst_" + userProfile.userCode + "_"+i));				
		}
		else{
			i=100;
		}

	}

	//console.dir($scope.serviceDeatils);	
		}
}

	
	


	});



controllerModule.controller('detaildServcrqsttCon', function ($scope, $rootScope, CookieService,$location,$routeParams) {
		
		

var userProfile = CookieService.getFromCookie();
	

var userdetails = CookieService.getUserStorage(userProfile.userCode);

		$scope.serviceDeatils =[];
	
	for(var i=0;i <100;i++){
		if(CookieService.getUserExist("custservRqst_" + userProfile.userCode + "_"+i)){
			$scope.serviceDeatils.push(CookieService.getUserStorage("custservRqst_" + userProfile.userCode + "_"+i));				
		}
		else{
			i=100;
		}

	}

	
	$scope.newService = function(){
		$location.path("/serviceRqst");
	}
		

	});
controllerModule.controller('RechargeCon', function ($scope, $rootScope, CookieService,$location,$routeParams) {
	$scope.operators = [

	{
		operator:'relianc Gsm'
	},
	{
		operator:'Vodafone'
	},
	{
		operator:'airtel'
	},
	{
		operator:'Tata docomo'
	},
	{
		operator:'MTS'
	}
	]

	$scope.selectionChange = function(){
		//$location.path("/serviceRqst");
	}
	$scope.RechargeNow = function(plan){
		//$location.path("/serviceRqst");

		if(plan !=null){
		console.log(plan.Operator.operator);
		var isnumMob = /^\d+$/.test(plan.Mobile);
		var isnumAmount = /^\d+$/.test(plan.Amount);
		var userProfile = CookieService.getFromCookie();
		var userdetails = CookieService.getUserStorage(userProfile.userCode);
		if(isnumMob && isnumAmount && plan.name != null && plan.Operator !=null){
				for(var i=0;i <100;i++){
		
			if(!CookieService.getUserExist("Recharge_" + userProfile.userCode + "_"+i)){
				CookieService.addTouserStorage("Recharge_" + userProfile.userCode+"_"+i,plan);					
				i=100;
			}	

	}	
		}
		else{
				alert("Inputs are not right");
		}
	}
	else{
		alert("Inputs are not right");
	}
		
		
	}
	$scope.ViewRecharge = function(){
		$location.path("/rechargeDetails");
	}
	
	
});

controllerModule.controller('rechargeDetailsCon', function ($scope, $rootScope, CookieService,$location,$routeParams) {

		var userProfile = CookieService.getFromCookie();
	

var userdetails = CookieService.getUserStorage(userProfile.userCode);

		$scope.RechargeDeatils =[];
	var j;
	for(var i=0;i <100;i++){
		if(CookieService.getUserExist("Recharge_" + userProfile.userCode + "_"+i)){
			//$scope.RechargeDeatils.push(CookieService.getUserStorage("Recharge_" + userProfile.userCode + "_"+i));				
		}
		else{
			j=i-1;
			i=101;
		}

	}
var m =0;
	for(var k=j;k >0;k--){
		
		if(CookieService.getUserExist("Recharge_" + userProfile.userCode + "_"+k)){
			$scope.RechargeDeatils.push(CookieService.getUserStorage("Recharge_" + userProfile.userCode + "_"+k));				
		}
		m=m+1;
		if(m == 5){
			k=0;
		}
	}

	
	$scope.rechargeback = function(){
		$location.path("/recharge");
	}
		

});

controllerModule.controller('checkoutCon', function ($scope, $rootScope, CookieService,$location,$routeParams) {

		$scope.checkoutshow = true;
		$scope.checkoutSubmit = function(checkoutdetails){
			if(checkoutdetails !=null){
			
			var iscard = /^\d+$/.test(checkoutdetails.Number);
		

			var ismonth = /^\d+$/.test(checkoutdetails.month);
			var isyear = /^\d+$/.test(checkoutdetails.year);
			var iscvv = /^\d+$/.test(checkoutdetails.cvv);

			if(iscard && checkoutdetails.Number.length ==12 && ismonth && checkoutdetails.month.length ==2 && checkoutdetails.month <=12 && isyear && checkoutdetails.year.length ==4 && iscvv && checkoutdetails.cvv.length ==3){

				alert('payment done');	
				$scope.checkoutshow = false;
			}
			else{
				alert('payment failure');	
			}

		}
		else{
				alert('payment failure');	
			}
	}
		

});


