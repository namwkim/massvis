/*! nam-web - v0.0.0 - 2015-12-24 */


var namapp = angular.module('namApp', [], function($interpolateProvider) {
		$interpolateProvider.startSymbol('<%');
		$interpolateProvider.endSymbol('%>');
	})
	.run(function($rootScope){
		//	 initialization
	})
