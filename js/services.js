var azsysServices = angular.module("azsys.services",[]);

azsysServices.factory('mainService', ['$http', mainService]);

function mainService($http){
	
	var functionArray = [];
	
	functionArray.contactus = function(contactObj){
		
		console.log("contactObj-->",contactObj);
		
	/*	var httpObject = {
				method: 'POST', 
		        url: 'http://azsys.byethost5.com/azsys/index.php/contactus',
		        data:contactObj
		};
		
	        var promise = $http(httpObject);
	        return promise; 
		return $http({
	        method: 'POST', 
	        url: 'http://rpmscrapnrecycling.com/azsys/serv/serv/index.php/contactus',
	        data:contactObj
	        });*/
	        return $http({
			        method: 'POST', 
			        url: 'http://arizonasys.com/azsys/index.php/contactus',
			        data:contactObj
	        });
	    
	};
	 
	return functionArray;
}