'use strict';

var innovationApp = angular.module('innovationApp', ['ngRoute', 'ngResource']);
innovationApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		controller: 'homeCtrl',
		templateUrl: 'js/application/templates/home/index.html'
	});
}]);