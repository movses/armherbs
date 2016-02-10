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
			url: 'herbs/under-construction.html',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Եղինջ',
			image: 'img/եղինջ.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'երեքնուկ',
			image: 'img/երեքնուկ.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Եզան Լեզու',
			image: 'img/եզան-լեզու.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Երիցուկ',
			image: 'img/երիցուկ.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Զվերոբոյ',
			image: 'img/զվերոբոյ.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},

		{
			url: 'herbs/under-construction.html',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},

		{
			url: 'herbs/under-construction.html',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},

		{
			url: 'herbs/under-construction.html',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'herbs/under-construction.html',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
        {
            url: 'herbs/under-construction.html',
            title: 'Basil',
            image: 'img/basil.jpeg'
        },
        {
            url: 'herbs/under-construction.html',
            title: 'Oregano',
            image: 'img/oregano.jpeg'
        },		{
            url: 'herbs/under-construction.html',
            title: 'Basil',
            image: 'img/basil.jpeg'
        },
        {
            url: 'herbs/under-construction.html',
            title: 'Oregano',
            image: 'img/oregano.jpeg'
        },		{
            url: 'herbs/under-construction.html',
            title: 'Basil',
            image: 'img/basil.jpeg'
        },
        {
            url: 'herbs/under-construction.html',
            title: 'Oregano',
            image: 'img/oregano.jpeg'
        },		{
            url: 'herbs/under-construction.html',
            title: 'Basil',
            image: 'img/basil.jpeg'
        },
        {
            url: 'herbs/under-construction.html',
            title: 'Oregano',
            image: 'img/oregano.jpeg'
        },		{
            url: 'herbs/under-construction.html',
            title: 'Basil',
            image: 'img/basil.jpeg'
        },
        {
            url: 'herbs/under-construction.html',
            title: 'Oregano',
            image: 'img/oregano.jpeg'
        }
	];

}
