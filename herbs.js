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
			url: 'basil',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'oregano',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Եղինջ',
			image: 'img/եղինջ.jpeg'
		},
		{
			url: 'under-construction',
			title: 'երեքնուկ',
			image: 'img/երեքնուկ.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Եզան Լեզու',
			image: 'img/եզան-լեզու.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Երիցուկ',
			image: 'img/երիցուկ.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Զվերոբոյ',
			image: 'img/զվերոբոյ.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},

		{
			url: 'under-construction',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},

		{
			url: 'under-construction',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},

		{
			url: 'under-construction',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Basil',
			image: 'img/basil.jpeg'
		},
		{
			url: 'under-construction',
			title: 'Oregano',
			image: 'img/oregano.jpeg'
		},
        {
            url: 'under-construction',
            title: 'Basil',
            image: 'img/basil.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Oregano',
            image: 'img/oregano.jpeg'
        },		{
            url: 'under-construction',
            title: 'Basil',
            image: 'img/basil.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Oregano',
            image: 'img/oregano.jpeg'
        },		{
            url: 'under-construction',
            title: 'Basil',
            image: 'img/basil.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Oregano',
            image: 'img/oregano.jpeg'
        },		{
            url: 'under-construction',
            title: 'Basil',
            image: 'img/basil.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Oregano',
            image: 'img/oregano.jpeg'
        },		{
            url: 'under-construction',
            title: 'Basil',
            image: 'img/basil.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Oregano',
            image: 'img/oregano.jpeg'
        }
	];

}
