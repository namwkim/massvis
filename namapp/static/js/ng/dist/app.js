/*! nam-web - v0.0.0 - 2017-05-08 */


var namapp = angular.module('namApp', [], function($interpolateProvider) {
		$interpolateProvider.startSymbol('<%');
		$interpolateProvider.endSymbol('%>');
	})
	.run(function($rootScope){
		//	 initialization
	})
