
angular.module('TaleCare.services', []).service('CookieService', function ($cookieStore) {
	
	
	
	this.addTouserStorage = function(username,userdetails) {
		localStorage.setItem(username, JSON.stringify(userdetails));
	};

	this.getUserStorage = function(username) {
		var retrievedObject = localStorage.getItem(username);

		if(retrievedObject != null){
			console.dir(retrievedObject);
			return JSON.parse(retrievedObject);				
		}
		else{
			return false;		
		}
	};
	this.getUserExist = function(username) {
		var retrievedObject = localStorage.getItem(username);
		if(retrievedObject != null){
			console.dir(retrievedObject);
			return true;				
		}
		else{
			return false;		
		}
	};
	

	this.addToCookie = function(userName,userCode) {
		$cookieStore.put('userName', userName);
		$cookieStore.put('userCode', userCode);
	};
	
	this.getFromCookie = function() {
		var userName = $cookieStore.get('userName');
		var userCode = $cookieStore.get('userCode');
		var userCookie = new Object();
		userCookie.userName = userName;
		userCookie.userCode = userCode; 
		return userCookie;
	};

	this.userexistCookie = function() {
		var userName = $cookieStore.get('userName');
		var userCode = $cookieStore.get('userCode');
		//alert(userName.length);
		if($cookieStore.get('userName') != null){
			return true		
		}
		else{
			return false;	
		}
	};
	
	this.removeFromCookie = function() {
		$cookieStore.remove('userName');
		$cookieStore.remove('userCode');
	}
	

// r(localStorage.getItem("lastname").name);
//     var lastname = "lastname";
// 	var x = new Object();
// 	var y = new Object();
// 	y.name ="sourav";
// 	y.id ="55";
// 	x.obj = y;
// 	localStorage.setItem(lastname, JSON.stringify(x));
// 	var retrievedObject = localStorage.getItem(lastname);
// 	console.dir(JSON.parse(retrievedObject).name);
// 	console.log('retrievedObject: ', JSON.parse(retrievedObject).name);
// 	console.log('retrievedObject: ', JSON.parse(retrievedObject).id);



});


