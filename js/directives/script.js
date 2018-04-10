var app = angular.module('myApp',[])

.directive('tgThermometerVertical', ['$window',"$http", function($window, $http) {

	return {
		restrict: 'E',
		scope: {
			percent: "@",
			size: "@",
			height: "@",
			unit: "@"
		},
		templateUrl: 'assets/js/directives/tg-thermometer-vertical.html',
		link: function(scope, elem, attrs) {
		}
	};

}]);
