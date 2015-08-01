/*! nam-web - v0.0.0 - 2015-07-31 */


var namapp = angular.module('namApp', [], function($interpolateProvider) {
		$interpolateProvider.startSymbol('<%');
		$interpolateProvider.endSymbol('%>');
	})
	.run(function($rootScope){
		//	 initialization
	})
