// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			//url: 'http://www.tutorialspoint.com/android/',
			url: 'herbs/under-construction.html',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			//url: 'http://www.tutorialspoint.com/angularjs/',
			url: 'herbs/under-construction.html',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			//url: 'http://www.tutorialspoint.com/html5/',
			url: 'herbs/under-construction.html',
			title: 'Եղինջ',
			image: 'img/եղինջ.jpeg'
		},
		{
			//url: 'http://www.tutorialspoint.com/css/',
			url: 'herbs/under-construction.html',
			title: 'երեքնուկ',
			image: 'img/երեքնուկ.jpeg'
		},
		{
			//url: 'http://www.tutorialspoint.com/java/',
			url: 'herbs/under-construction.html',
			title: 'Եզան Լեզու',
			image: 'img/եզան-լեզու.jpeg'
		},
		{
			//url: 'http://www.tutorialspoint.com/joomla/',
			url: 'herbs/under-construction.html',
			title: 'Երիցուկ',
			image: 'img/երիցուկ.jpeg'
		},
		{
			//url: 'http://www.tutorialspoint.com/html/',
			url: 'herbs/under-construction.html',
			title: 'Զվերոբոյ',
			image: 'img/զվերոբոյ.jpeg'
		}
	];


}
