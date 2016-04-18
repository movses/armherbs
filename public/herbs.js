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
            url: 'hippophae',
            title: 'Չիչխան',
            keywords: ['Չիչխան', 'hippophae'],
            image: 'img/չիչխան.jpeg'
        },
		{
			url: 'laurus',
			title: 'Դափնի',
            keywords: ['Դափնի', 'laurus'],
			image: 'img/no-image.jpeg'
		},
        {
            url: 'under-construction',
            title: 'Ազնվամորի',
            keywords: ['Ազնվամորի', 'Rubus idaeus'],
            image: 'img/ազնվամորի.gif'
        },
        {
            url: 'under-construction',
            title: 'Ալոճենի',
            keywords: ['Ալոճենի', 'Crataegus'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Անանուխ',
            keywords: ['Անանուխ', 'Mentha'],
            image: 'img/անանուխ.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Անթառամ Կղիմդրաբաժակ',
            keywords: ['Անթառամ Կղիմդրաբաժակ', 'Helichrysium plitocalix'],
            image: 'img/անթառամ.jpeg'
        },        {
            url: 'under-construction',
            title: 'Առյուծագի',
            keywords: ['Առյուծագի', 'Leonurus'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Արյունխմիկ Դեղատու',
            keywords: ['Արյունխմիկ Դեղատու', 'Sanguisorba officinalis'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Գազ Մանրագլխիկ',
            keywords: ['Գազ Մանրագլխիկ', 'Astragalus microcephalus Wild'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Գաղձ',
            keywords: ['Գաղձ', 'Cuscuta'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Գայլահատ Մահացու',
            keywords: ['Գայլահատ Մահացու', 'Daphne mezereum'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Գայլուկ Սովորական',
            keywords: ['Գայլուկ Սովորական', 'Humulus lupulus'],
            image: 'img/գայլուկ.jpg'
        },
        {
            url: 'under-construction',
            title: 'Գետնամորի Անտառային',
            keywords: ['Գետնամորի Անտառային', 'Fragaria vesca'],
            image: 'img/գետնամորի.jpg'
        },
        {
            url: 'under-construction',
            title: 'Գիհի',
            keywords: ['Գիհի', 'Juniperus'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Գնարբուկ',
            keywords: ['Գնարբուկ', 'Prumula'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Եզան Լեզու Մեծ',
            keywords: ['Եզան Լեզու Մեծ', 'Plantago major'],
            image: 'img/եզան-լեզու.jpg'
        },        {
            url: 'under-construction',
            title: 'Եզնարգել Դաշտային',
            keywords: ['Եզնարգել Դաշտային', 'Ononis arvensis'],
            image: 'img/եզնարգել.png'
        },
        {
            url: 'under-construction',
            title: 'Եղերդակ Սովորական',
            keywords: ['Եղերդակ Սովորական', 'Cichorium intybus'],
            image: 'img/եղերդակ.jpg'
        },
        {
            url: 'under-construction',
            title: 'Եղինջ Երկտուն',
            keywords: ['Եղինջ Երկտուն', 'Urtica dioca'],
            image: 'img/եղինջ.png'
        },
        {
            url: 'under-construction',
            title: 'Թանթրվենի Սև',
            keywords: ['Թանթրվենի Սև', 'Sambucus nigra'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Իշառվույտ Դեղատու',
            keywords: ['Իշառվույտ Դեղատու', 'Melilotus officinalis'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Լոշտակ Սպիտակ',
            keywords: ['Լոշտակ Սպիտակ', 'Bryonia alba'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Լորենի',
            keywords: ['Լորենի', 'Tilia'],
            image: 'img/լորենի.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Խատուտիկ Դեղատու',
            keywords: ['Խատուտիկ Դեղատու', 'Taraxacum officinalis'],
            image: 'img/խատուտիկ.jpg'
        },
        {
            url: 'under-construction',
            title: 'Խնկածաղիկ Սովորոկան',
            keywords: ['Խնկածաղիկ Սովորոկան', 'Origanum vulgare'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Խնկեղեգ Եղեգնային',
            keywords: ['Խնկեղեգ Եղեգնային', 'Acorus calamus'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Խռնդատ',
            keywords: ['Խռնդատ', 'Verbascum'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Ծիծեռնախոտ Մեծ',
            keywords: ['Ծիծեռնախոտ Մեծ', 'Chelidonium majus'],
            image: 'img/ծիծեռնախոտ.jpg'
        },
        {
            url: 'under-construction',
            title: 'Ծնեբեկ Դեղատու',
            keywords: ['Ծնեբեկ Դեղատու', 'Asparagus officinalis'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Ծովաբողկ Գյուղական',
            keywords: ['Ծովաբողկ Գյուղական', 'Armoracia rusticana'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Ծորենի Սովորական',
            keywords: ['Ծորենի Սովորական', 'Berberis vulgaris'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Կաղնի',
            keywords: ['Կաղնի', 'Quercus'],
            image: 'img/կաղնի.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Կաղշնակ Սովորական',
            keywords: ['Կաղշնակ Սովորական', 'Onopordon acanthium'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Կատվալեզու Եռաբաժան',
            keywords: ['Կատվալեզու Եռաբաժան', 'Bidens tripartitus'],
            image: 'img/կատվալեզու.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Կատվախոտ Դեղատու',
            keywords: ['Կատվախոտ Դեղատու', 'Valeriana officinalis'],
            image: 'img/կատվախոտ.png'
        },
        {
            url: 'under-construction',
            title: 'Կղմուխ Հեղինեի',
            keywords: ['Կղմուխ Հեղինեի', 'Inula helenium'],
            image: 'img/կղմուխ.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Կռատուկ',
            keywords: ['Կռատուկ', 'Arctium'],
            image: 'img/կռատուկ.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Հազարատերևուկ Հատվածատերև',
            keywords: ['Հազարատերևուկ Հատվածատերև', 'Achillea millefolium'],
            image: 'img/հազարատերևուկ.jpg'
        },
        {
            url: 'under-construction',
            title: 'Հալևորիկ Ռոմբատերև',
            keywords: ['Հալևորիկ Ռոմբատերև', 'Senecio rhombifolius'],
            image: 'img/հալևորիկ.jpg'
        },
        {
            url: 'under-construction',
            title: 'Ձիաձետ Դաշտային',
            keywords: ['Ձիաձետ Դաշտային', 'Equisetum arvense'],
            image: 'img/ձիաձետ.jpg'
        },
        {
            url: 'under-construction',
            title: 'Ղանձիլ',
            keywords: ['Ղանձիլ', 'Allium ursinum'],
            image: 'img/ղանձիլ.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Մակարդախոտ Իսկական',
            keywords: ['Մակարդախոտ Իսկական', 'Galium verum'],
            image: 'img/մակարդախոտ.jpg'
        },
        {
            url: 'under-construction',
            title: 'Մամխի Փշոտ',
            keywords: ['Մամխի Փշոտ', 'Prunus spinosa'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Մանդիկ Մսագույն',
            keywords: ['Մանդիկ Մսագույն', 'Polygonum carneum'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Մասրենի',
            keywords: ['Մասրենի', 'Rosa'],
            image: 'img/մասրենի.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Մատնոցուկ Ժանգային',
            keywords: ['Մատնոցուկ Ժանգային', 'Digitalis ferruginea'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Մեղրածուծ Սովորական',
            keywords: ['Մեղրածուծ Սովորական', 'Marrubium vulgare'],
            image: 'img/մեղրածուծ.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Մղամուճ Սպիտակ',
            keywords: ['Մղամուճ Սպիտակ', 'Viscum allum'],
            image: 'img/մղամուճ.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Մոշենի',
            keywords: ['Մոշենի', 'Rubus caesius'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Նվիկ Արևելյան',
            keywords: ['Նվիկ Արևելյան', 'Arum orientale'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Ոզնենի Կարմրագլուխ',
            keywords: ['Ոզնենի Կարմրագլուխ', 'Echinops spherocephalus'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Սեզ Սողացող',
            keywords: ['Սեզ Սողացող', 'Agropyron repens'],
            image: 'img/սեզ.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Սինդրիկ',
            keywords: ['Սինդրիկ', 'Polygonatum Adans'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Սպանդ Սովորական',
            keywords: ['Սպանդ Սովորական', 'Peganum harmala'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Սրոհունդ Սովորական',
            keywords: ['Սրոհունդ Սովորական', 'Hypericum perforatum'],
            image: 'img/սրոհունդ.jpg'
        },
        {
            url: 'under-construction',
            title: 'Տատրակ Սովորական',
            keywords: ['Տատրակ Սովորական', 'Tussillago farfara'],
            image: 'img/տատրակ.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Տերեփուկ Կապույտ',
            keywords: ['Տերեփուկ Կապույտ', 'Centaurea cyanus'],
            image: 'img/տերեփուկ.jpg'
        },        {
            url: 'under-construction',
            title: 'Տորոն Ներկատու',
            keywords: ['Տորոն Ներկատու', 'Rubia tinctorum'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Տուղտ Դեղատու',
            keywords: ['Տուղտ Դեղատու', 'Althaea officinalis'],
            image: 'img/տուղտ.jpeg'
        },
        {
            url: 'under-construction',
            title: 'ՈՒրց Սողացող',
            keywords: ['ՈՒրց Սողացող', 'Thymus serpyllum'],
            image: 'img/ուրց.jpg'
        },
        {
            url: 'under-construction',
            title: 'Քնախոտ',
            keywords: ['Քնախոտ', 'Pulsatilla Adans'],
            image: 'img/no-image.jpeg'
        },
        {
            url: 'under-construction',
            title: 'Օճառախոտ Դեղատու',
            keywords: ['Օճառախոտ Դեղատու', 'Saponaria officinalis'],
            image: 'img/օճառախոտ.jpg'
        },
        {
            url: 'under-construction',
            title: 'Օշինդր Դառը',
            keywords: ['Օշինդր Դառը', 'Artemisia absinthium'],
            image: 'img/no-image.jpeg'
        }

    ];

}
