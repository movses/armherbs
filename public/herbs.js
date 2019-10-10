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
            url: 'rubus-idaeus',
            title: 'Ազնվամորի',
            keywords: ['Ազնվամորի', 'Rubus idaeus'],
            image: 'img/ազնվամորի.gif'
        },
        {
            url: 'crataegus',
            title: 'Ալոճենի',
            keywords: ['Ալոճենի', 'Crataegus'],
            image: 'img/ալոճենի.png'
        },
        {
            url: 'mentha',
            title: 'Անանուխ',
            keywords: ['Անանուխ', 'Mentha'],
            image: 'img/անանուխ.jpeg'
        },
        {
            url: 'helichrysium',
            title: 'Անթառամ Կղիմդրաբաժակ',
            keywords: ['Անթառամ Կղիմդրաբաժակ', 'Helichrysium plitocalix'],
            image: 'img/անթառամ.jpeg'
        },        {
            url: 'leonurus',
            title: 'Առյուծագի',
            keywords: ['Առյուծագի', 'Leonurus'],
            image: 'img/առյուծագի.png'
        },
        {
            url: 'sanguisorba',
            title: 'Արյունխմիկ Դեղատու',
            keywords: ['Արյունխմիկ Դեղատու', 'Sanguisorba officinalis'],
            image: 'img/արյունխմիկ.png'
        },
        {
            url: 'astragalus',
            title: 'Գազ Մանրագլխիկ',
            keywords: ['Գազ Մանրագլխիկ', 'Astragalus microcephalus Wild'],
            image: 'img/գազ.png'
        },
        {
            url: 'cuscuta',
            title: 'Գաղձ',
            keywords: ['Գաղձ', 'Cuscuta'],
            image: 'img/գաղձ.png'
        },
        {
            url: 'daphne',
            title: 'Գայլահատ Մահացու',
            keywords: ['Գայլահատ Մահացու', 'Daphne mezereum'],
            image: 'img/գայլահատ.png'
        },
        {
            url: 'humulus',
            title: 'Գայլուկ Սովորական',
            keywords: ['Գայլուկ Սովորական', 'Humulus lupulus'],
            image: 'img/գայլուկ.jpg'
        },
        {
            url: 'fragaria',
            title: 'Գետնամորի Անտառային',
            keywords: ['Գետնամորի Անտառային', 'Fragaria vesca'],
            image: 'img/գետնամորի.jpg'
        },
        {
            url: 'juniperus',
            title: 'Գիհի',
            keywords: ['Գիհի', 'Juniperus'],
            image: 'img/գիհի.png'
        },
        {
            url: 'prumula',
            title: 'Գնարբուկ',
            keywords: ['Գնարբուկ', 'Prumula'],
            image: 'img/գնարբուկ.png'
        },
        {
            url: 'plantago',
            title: 'Եզան Լեզու Մեծ',
            keywords: ['Եզան Լեզու Մեծ', 'Plantago major'],
            image: 'img/եզան-լեզու.jpg'
        },
        {
            url: 'ononis',
            title: 'Եզնարգել Դաշտային',
            keywords: ['Եզնարգել Դաշտային', 'Ononis arvensis'],
            image: 'img/եզնարգել.png'
        },
        {
            url: 'cichorium',
            title: 'Եղերդակ Սովորական',
            keywords: ['Եղերդակ Սովորական', 'Cichorium intybus'],
            image: 'img/եղերդակ.jpg'
        },
        {
            url: 'urtica',
            title: 'Եղինջ Երկտուն',
            keywords: ['Եղինջ Երկտուն', 'Urtica dioca'],
            image: 'img/եղինջ.png'
        },
        {
            url: 'sambucus',
            title: 'Թանթրվենի Սև',
            keywords: ['Թանթրվենի Սև', 'Sambucus nigra'],
            image: 'img/թանթրվենի.png'
        },
        {
            url: 'melilotus',
            title: 'Իշառվույտ Դեղատու',
            keywords: ['Իշառվույտ Դեղատու', 'Melilotus officinalis'],
            image: 'img/իշառվույտ.png'
        },
        {
            url: 'bryonia',
            title: 'Լոշտակ Սպիտակ',
            keywords: ['Լոշտակ Սպիտակ', 'Bryonia alba'],
            image: 'img/լոշտակ.png'
        },
        {
            url: 'tilia',
            title: 'Լորենի',
            keywords: ['Լորենի', 'Tilia'],
            image: 'img/լորենի.jpeg'
        },
        {
            url: 'taraxacum',
            title: 'Խատուտիկ Դեղատու',
            keywords: ['Խատուտիկ Դեղատու', 'Taraxacum officinalis'],
            image: 'img/խատուտիկ.jpg'
        },
        {
            url: 'origanum',
            title: 'Խնկածաղիկ Սովորոկան',
            keywords: ['Խնկածաղիկ Սովորոկան', 'Origanum vulgare'],
            image: 'img/խնկածաղիկ.png'
        },
        {
            url: 'acorus',
            title: 'Խնկեղեգ Եղեգնային',
            keywords: ['Խնկեղեգ Եղեգնային', 'Acorus calamus'],
            image: 'img/խնկեղեգ.png'
        },
        {
            url: 'verbascum',
            title: 'Խռնդատ',
            keywords: ['Խռնդատ', 'Verbascum'],
            image: 'img/խռնդատ.png'
        },
        {
            url: 'chelidonium',
            title: 'Ծիծեռնախոտ Մեծ',
            keywords: ['Ծիծեռնախոտ Մեծ', 'Chelidonium majus'],
            image: 'img/ծիծեռնախոտ.jpg'
        },
        {
            url: 'asparagus',
            title: 'Ծնեբեկ Դեղատու',
            keywords: ['Ծնեբեկ Դեղատու', 'Asparagus officinalis'],
            image: 'img/ծնեբեկ.png'
        },
        {
            url: 'armoracia',
            title: 'Ծովաբողկ Գյուղական',
            keywords: ['Ծովաբողկ Գյուղական', 'Armoracia rusticana'],
            image: 'img/ծովաբողկ.png'
        },
        {
            url: 'berberis',
            title: 'Ծորենի Սովորական',
            keywords: ['Ծորենի Սովորական', 'Berberis vulgaris'],
            image: 'img/ծորենի.png'
        },
        {
            url: 'quercus',
            title: 'Կաղնի',
            keywords: ['Կաղնի', 'Quercus'],
            image: 'img/կաղնի.png'
        },
        {
            url: 'onopordon',
            title: 'Կաղշնակ Սովորական',
            keywords: ['Կաղշնակ Սովորական', 'Onopordon acanthium'],
            image: 'img/կաղշնակ.png'
        },
        {
            url: 'bidens',
            title: 'Կատվալեզու Եռաբաժան',
            keywords: ['Կատվալեզու Եռաբաժան', 'Bidens tripartitus'],
            image: 'img/կատվալեզու.jpeg'
        },
        {
            url: 'valeriana',
            title: 'Կատվախոտ Դեղատու',
            keywords: ['Կատվախոտ Դեղատու', 'Valeriana officinalis'],
            image: 'img/կատվախոտ.png'
        },
        {
            url: 'inula',
            title: 'Կղմուխ Հեղինեի',
            keywords: ['Կղմուխ Հեղինեի', 'Inula helenium'],
            image: 'img/կղմուխ.jpeg'
        },
        {
            url: 'arctium',
            title: 'Կռատուկ',
            keywords: ['Կռատուկ', 'Arctium'],
            image: 'img/կռատուկ.jpeg'
        },
        {
            url: 'achillea',
            title: 'Հազարատերևուկ Հատվածատերև',
            keywords: ['Հազարատերևուկ Հատվածատերև', 'Achillea millefolium'],
            image: 'img/հազարատերևուկ.jpg'
        },
        {
            url: 'senecio',
            title: 'Հալևորիկ Ռոմբատերև',
            keywords: ['Հալևորիկ Ռոմբատերև', 'Senecio rhombifolius'],
            image: 'img/հալևորիկ.jpg'
        },
        {
            url: 'equisetum',
            title: 'Ձիաձետ Դաշտային',
            keywords: ['Ձիաձետ Դաշտային', 'Equisetum arvense'],
            image: 'img/ձիաձետ.jpg'
        },
        {
            url: 'allium',
            title: 'Ղանձիլ',
            keywords: ['Ղանձիլ', 'Allium ursinum'],
            image: 'img/ղանձիլ.png'
        },
        {
            url: 'galium',
            title: 'Մակարդախոտ Իսկական',
            keywords: ['Մակարդախոտ Իսկական', 'Galium verum'],
            image: 'img/մակարդախոտ.jpg'
        },
        {
            url: 'prunus',
            title: 'Մամխի Փշոտ',
            keywords: ['Մամխի Փշոտ', 'Prunus spinosa'],
            image: 'img/մամխի.png'
        },
        {
            url: 'polygonum',
            title: 'Մանդիկ Մսագույն',
            keywords: ['Մանդիկ Մսագույն', 'Polygonum carneum'],
            image: 'img/մանդիկ.png'
        },
        {
            url: 'rosa',
            title: 'Մասրենի',
            keywords: ['Մասրենի', 'Rosa'],
            image: 'img/մասրենի.jpeg'
        },
        {
            url: 'digitalis',
            title: 'Մատնոցուկ Ժանգային',
            keywords: ['Մատնոցուկ Ժանգային', 'Digitalis ferruginea'],
            image: 'img/մատնոցուկ.png'
        },
        {
            url: 'marrubium',
            title: 'Մեղրածուծ Սովորական',
            keywords: ['Մեղրածուծ Սովորական', 'Marrubium vulgare'],
            image: 'img/մեղրածուծ.jpeg'
        },
        {
            url: 'viscum',
            title: 'Մղամուճ Սպիտակ',
            keywords: ['Մղամուճ Սպիտակ', 'Viscum allum'],
            image: 'img/մղամուճ.jpeg'
        },
        {
            url: 'rubus-caesius',
            title: 'Մոշենի',
            keywords: ['Մոշենի', 'Rubus caesius'],
            image: 'img/մոշենի.png'
        },
        {
            url: 'arum',
            title: 'Նվիկ Արևելյան',
            keywords: ['Նվիկ Արևելյան', 'Arum orientale'],
            image: 'img/նվիկ.png'
        },
        {
            url: 'echinops',
            title: 'Ոզնենի Կարմրագլուխ',
            keywords: ['Ոզնենի Կարմրագլուխ', 'Echinops spherocephalus'],
            image: 'img/ոզնենի.png'
        },
	{
			url: 'hippophae',
			title: 'Չիչխան',
			keywords: ['Չիչխան', 'hippophae'],
			image: 'img/չիչխան.jpeg'
	},
        {
            url: 'agropyron',
            title: 'Սեզ Սողացող',
            keywords: ['Սեզ Սողացող', 'Agropyron repens'],
            image: 'img/սեզ.jpeg'
        },
        {
            url: 'polygonatum',
            title: 'Սինդրիկ',
            keywords: ['Սինդրիկ', 'Polygonatum Adans'],
            image: 'img/սինդրիկ.png'
        },
        {
            url: 'peganum',
            title: 'Սպանդ Սովորական',
            keywords: ['Սպանդ Սովորական', 'Peganum harmala'],
            image: 'img/սպանդ.png'
        },
        {
            url: 'hypericum',
            title: 'Սրոհունդ Սովորական',
            keywords: ['Սրոհունդ Սովորական', 'Hypericum perforatum'],
            image: 'img/սրոհունդ.png'
        },
        {
            url: 'tussillago',
            title: 'Տատրակ Սովորական',
            keywords: ['Տատրակ Սովորական', 'Tussillago farfara'],
            image: 'img/տատրակ.jpeg'
        },
        {
            url: 'centaurea',
            title: 'Տերեփուկ Կապույտ',
            keywords: ['Տերեփուկ Կապույտ', 'Centaurea cyanus'],
            image: 'img/տերեփուկ.jpg'
        },
        {
            url: 'rubia',
            title: 'Տորոն Ներկատու',
            keywords: ['Տորոն Ներկատու', 'Rubia tinctorum'],
            image: 'img/տորոն.png'
        },
        {
            url: 'althaea',
            title: 'Տուղտ Դեղատու',
            keywords: ['Տուղտ Դեղատու', 'Althaea officinalis'],
            image: 'img/տուղտ.png'
        },
        {
            url: 'thymus',
            title: 'ՈՒրց Սողացող',
            keywords: ['ՈՒրց Սողացող', 'Thymus serpyllum'],
            image: 'img/ուրց.jpg'
        },
        {
            url: 'pulsatilla',
            title: 'Քնախոտ',
            keywords: ['Քնախոտ', 'Pulsatilla Adans'],
            image: 'img/քնախոտ.png'
        },
        {
            url: 'saponaria',
            title: 'Օճառախոտ Դեղատու',
            keywords: ['Օճառախոտ Դեղատու', 'Saponaria officinalis'],
            image: 'img/օճառախոտ.jpg'
        },
        {
            url: 'artemisia',
            title: 'Օշինդր Դառը',
            keywords: ['Օշինդր Դառը', 'Artemisia absinthium'],
            image: 'img/օշինդր.jpeg'
        }

    ];

}
