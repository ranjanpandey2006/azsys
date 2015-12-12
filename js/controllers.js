var azsysCtrls = angular.module("azsys.controllers",[]);
azsysCtrls.controller("MainCtrl",['$scope','$location','mainService','$log','usSpinnerService','$rootScope',mainCtrl]);
azsysCtrls.controller("MenuCtrl",['$scope','$location','$log',menuCtrl]);
azsysCtrls.controller("JobsCtrl",['$scope','$http','$upload',jobsCtrl]);


function jobsCtrl($scope,$http,$upload){
	
	$scope.onFileSelect = function($files) {
    $scope.message = "";
    for (var i = 0; i < $files.length; i++) {
        var file = $files[i];
        console.log(file);
        $scope.upload = $upload.upload({
            url: 'http://localhost:80/azsys/upload.php',
            method: 'POST',               
            file: file
        }).success(function(data, status, headers, config) {
            $scope.message = data;                
        }).error(function(data, status) {
            $scope.message = data;
        });
    }
};
  }


function mainCtrl($scope,$location,mainService,$log,usSpinnerService, $rootScope){

	$scope.slides = [
		

		{imageUrl:"images/adult-education-583693_1280.jpg", text:"", isActive:true},
		{imageUrl:"images/banner-training-development1.jpg", text:"aaaaaaaaa", isActive:false},
		{imageUrl:"images/e.jpg", text:"", isActive:false},
	//	{imageUrl:"images/arrow-394143_1280.jpg", text:"", isActive:false},
		{imageUrl:"images/search-engine-optimization-411347_1280.jpg", text:"", isActive:false},
		{imageUrl:"images/twitter-292993_1280.jpg", text:"", isActive:false},
		{imageUrl:"images/source-code-583537_1280.jpg", text:"", isActive:false},
		{imageUrl:"images/training_3.jpg", text:"", isActive:false},
		{imageUrl:"images/business-313568_1280.jpg", text:"", isActive:false},
	//	{imageUrl:"images/computer-640651_1280.jpg", text:"", isActive:false},
		
		{imageUrl:"images/training-396524_1280.jpg", text:"", isActive:false},
		
		{imageUrl:"images/web-400892_1280.jpg", text:"", isActive:false},

		
	//	{imageUrl:"images/HTML5-CSS3-jQuery-javascript.jpg", text:"", isActive:false},
		
	//	{imageUrl:"images/slide2.jpg", text:"", isActive:false},


	];



    $scope.startcounter = 0;
    $scope.startSpin = function() {
      if (!$scope.spinneractive) {
        usSpinnerService.spin('spinner-1');
        $scope.startcounter++;
      }
    };

    $scope.stopSpin = function() {
      if ($scope.spinneractive) {
        usSpinnerService.stop('spinner-1');
      }
    };
    $scope.spinneractive = false;

    $rootScope.$on('us-spinner:spin', function(event, key) {
      $scope.spinneractive = true;
    });

    $rootScope.$on('us-spinner:stop', function(event, key) {
      $scope.spinneractive = false;
    });
  

    $scope.disableContactBtn = true;
    $scope.disableContactBtnClass = 'btn btn-default';

    $scope.$watchCollection('contact',function(contactObject){
    	//console.log("contact obj - "+JSON.stringify(contactObject));

    	if (contactObject.name && contactObject.email && contactObject.phone && contactObject.query && contactObject.timeToContact && contactObject.contactWay) {
    		$scope.disableContactBtn = false;
    		$scope.disableContactBtnClass = 'btn btn-warning';
    	};
    });

	$scope.showMsg = false;
	$scope.contactNow = function(){
		$scope.startSpin();
	//	console.info("ctrl - ",$scope.contact);
		var promiseObj = mainService.contactus($scope.contact);
		promiseObj.success(function(data,status){
			if(data) {
			   $scope.showMsg = true;
			   $scope.contact = '';
			   $scope.stopSpin();
			   $scope.disableContactBtn = true;
    		   $scope.disableContactBtnClass = 'btn btn-default';
			}
			//$log.info("data - "+data);
			//console.info("data - "+data);
		});
		promiseObj.error(function(data, status,response){
			//console.info("error -  response - "+status+" - "+response);
		});
			
	};
	
}
function menuCtrl($scope,$location,$log){
	this.tab = 1;
	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(checkTab) {
		var val =  this.tab === checkTab;
	//	$log.info(val+" checkTab  "+checkTab+"  this.tab "+ this.tab);
		return val;
	};
}