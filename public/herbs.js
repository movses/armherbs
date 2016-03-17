// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});


function InstantSearchController($scope){

	$scope.items = [
		{
			url: 'under-construction',
			title: 'Խորդենի',
			image: 'img/խորդենի.png'
		},
		{
			url: 'under-construction',
			title: 'Եղեսպակ',
			image: 'img/եղեսպակ.jpg'
		},
		{
			url: 'under-construction',
			title: 'Երիցուկ',
			image: 'img/երիցուկ.jpg'
		},
		{
			url: 'under-construction',
			title: 'Խորդենի',
			image: 'img/խորդենի.jpg'
		},
		{
			url: 'under-construction',
			title: 'Հազար',
			image: 'img/հազար.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Ուրց',
			image: 'img/ուրց.jpg'
		},
		{
			url: 'under-construction',
			title: 'Հապալաղ',
			image: 'img/հապալաղ.jpg'
		},
		{
			url: 'hippophae',
			title: 'Չիչխան',
			image: 'img/չիչխան.jpeg'
		},
		{
			url: 'laurus',
			title: 'Դափնի',
			image: 'img/դափնի.jpeg'
		},		{
			url: 'basil',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'oregano',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		}
	];

}
