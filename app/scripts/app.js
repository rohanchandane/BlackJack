'use strict';

/**
 * @ngdoc overview
 * @name blackjackApp
 * @description
 * # blackjackApp
 *
 * Main module of the application.
 */
angular
  .module('blackjackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
