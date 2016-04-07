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
            angular.forEach(item.keywords, function(keyword) {
                if(keyword.toLowerCase().indexOf(searchString) !== -1){
                    result.push(item);
                }
            });
		});

		return result;
	};

});


function InstantSearchController($scope){

	$scope.items = [
		{
			url: 'under-construction',
			title: 'Խորդենի',
			keywords: ['Խորդենի'],
			image: 'img/խորդենի.png'
		},
		{
			url: 'under-construction',
			title: 'Եղեսպակ',
			keywords: ['Եղեսպակ'],
			image: 'img/եղեսպակ.jpg'
		},
		{
			url: 'under-construction',
			title: 'Երիցուկ',
			keywords: ['Երիցուկ'],
			image: 'img/երիցուկ.jpg'
		},
		{
			url: 'under-construction',
			title: 'Հազար',
			keywords: ['Հազար'],
			image: 'img/հազար.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Ուրց',
			keywords: ['Ուրց'],
			image: 'img/ուրց.jpg'
		},
		{
			url: 'under-construction',
			title: 'Հապալաղ',
			keywords: ['Հապալաղ'],
			image: 'img/հապալաղ.jpg'
		},
		{
			url: 'hippophae',
			title: 'Չիչխան',
            keywords: ['Չիչխան', 'hippophae'],
			image: 'img/չիչխան.jpeg'
		},
		{
			url: 'laurus',
			title: 'Դափնի',
            keywords: ['Դափնի', 'laurus'],
			image: 'img/դափնի.jpeg'
		}
	];

}
