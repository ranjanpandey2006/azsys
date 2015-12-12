var azsys = angular.module("azsys",['azsys.controllers','azsys.services','ngRoute','angularFileUpload','angularSpinner','ui.bootstrap']).
config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
		when('/home', {
	            templateUrl: 'partials/home.html',
				controller: 'MainCtrl'
			});
	  
	  $routeProvider.		
		when('/about', {
	            templateUrl: 'partials/about.html'
				
			});
	  
	  $routeProvider.		
		when('/staffing', {
	            templateUrl: 'partials/staffing.html'
				
			});
	  $routeProvider.		
		when('/web', {
	            templateUrl: 'partials/webdevelopment.html'
				
			});
	  $routeProvider.		
		when('/testing', {
	            templateUrl: 'partials/autotesting.html'
				
			});
	  $routeProvider.		
		when('/training', {
	            templateUrl: 'partials/training.html'
				
			});
	  $routeProvider.		
		when('/partners', {
	            templateUrl: 'partials/partners.html',
				controller: 'MainCtrl'
			});
	  
	  $routeProvider.		
		when('/contact', {
	            templateUrl: 'partials/contact.html',
				controller: 'MainCtrl'
			});
	  $routeProvider.		
		when('/jobs', {
	            templateUrl: 'partials/jobs.html',
				controller: 'JobsCtrl'
			});
	  $routeProvider.otherwise({redirectTo: '/home'});
	}]);