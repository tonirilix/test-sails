var app = angular.module('Suggestt',[]);
app.controller('BaseCtrl',['$scope', function($scope){

	$scope.emojis = [{
		id: 1,
		text: '=)'
	},
	{
		id: 2,
		text: '=-)'
	},
	{
		id: 3,
		text: '8)'
	},
	{
		id: 4,
		text: ':)'
	}];

}]);