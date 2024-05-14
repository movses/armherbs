// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter("searchFor", function () {
  return function (arr, searchString) {
    if (!searchString) {
      return arr;
    }

    var result = [];

    searchString = searchString.toLowerCase();

    angular.forEach(arr, function (item) {
      angular.forEach(item.keywords, function (keyword) {
        if (keyword.toLowerCase().indexOf(searchString) !== -1) {
          result.push(item);
        }
      });
    });

    return result;
  };
});

function InstantSearchController($scope) {
  $scope.items = [
    {
      url: "rubus-idaeus",
      title: "Ազնվամորի",
      keywords: ["Ազնվամորի", "Rubus idaeus"],
      image: "img/ազնվամորի.gif",
      alt: "rubus-idaeus",
    },
    {
      url: "crataegus",
      title: "Ալոճենի",
      keywords: ["Ալոճենի", "Crataegus"],
      image: "img/ալոճենի.png",
      alt: "crataegus",
    },
    {
      url: "mentha",
      title: "Անանուխ",
      keywords: ["Անանուխ", "Mentha"],
      image: "img/անանուխ.jpeg",
      alt: "mentha",
    },
    {
      url: "helichrysium",
      title: "Անթառամ Կղիմդրաբաժակ",
      keywords: ["Անթառամ Կղիմդրաբաժակ", "Helichrysium plitocalix"],
      image: "img/անթառամ.jpeg",
      alt: "helichrysium",
    },
    {
      url: "leonurus",
      title: "Առյուծագի",
      keywords: ["Առյուծագի", "Leonurus"],
      image: "img/առյուծագի.png",
      alt: "leonurus",
    },
    {
      url: "sanguisorba",
      title: "Արյունխմիկ Դեղատու",
      keywords: ["Արյունխմիկ Դեղատու", "Sanguisorba officinalis"],
      image: "img/արյունխմիկ.png",
      alt: "sanguisorba",
    },
    {
      url: "astragalus",
      title: "Գազ Մանրագլխիկ",
      keywords: ["Գազ Մանրագլխիկ", "Astragalus microcephalus Wild"],
      image: "img/գազ.png",
      alt: "astragalus",
    },
    {
      url: "cuscuta",
      title: "Գաղձ",
      keywords: ["Գաղձ", "Cuscuta"],
      image: "img/գաղձ.png",
      alt: "cuscuta",
    },
    {
      url: "daphne",
      title: "Գայլահատ Մահացու",
      keywords: ["Գայլահատ Մահացու", "Daphne mezereum"],
      image: "img/գայլահատ.png",
      alt: "daphne",
    },
    {
      url: "humulus",
      title: "Գայլուկ Սովորական",
      keywords: ["Գայլուկ Սովորական", "Humulus lupulus"],
      image: "img/գայլուկ.jpg",
      alt: "humulus",
    },
    {
      url: "fragaria",
      title: "Գետնամորի Անտառային",
      keywords: ["Գետնամորի Անտառային", "Fragaria vesca"],
      image: "img/գետնամորի.jpg",
      alt: "fragaria",
    },
    {
      url: "juniperus",
      title: "Գիհի",
      keywords: ["Գիհի", "Juniperus"],
      image: "img/գիհի.png",
      alt: "juniperus",
    },
    {
      url: "prumula",
      title: "Գնարբուկ",
      keywords: ["Գնարբուկ", "Prumula"],
      image: "img/գնարբուկ.png",
      alt: "prumula",
    },
    {
      url: "plantago",
      title: "Եզան Լեզու Մեծ",
      keywords: ["Եզան Լեզու Մեծ", "Plantago major"],
      image: "img/եզան-լեզու.jpg",
      alt: "plantago",
    },
    {
      url: "ononis",
      title: "Եզնարգել Դաշտային",
      keywords: ["Եզնարգել Դաշտային", "Ononis arvensis"],
      image: "img/եզնարգել.png",
      alt: "ononis",
    },
    {
      url: "cichorium",
      title: "Եղերդակ Սովորական",
      keywords: ["Եղերդակ Սովորական", "Cichorium intybus"],
      image: "img/եղերդակ.jpg",
      alt: "cichorium",
    },
    {
      url: "urtica",
      title: "Եղինջ Երկտուն",
      keywords: ["Եղինջ Երկտուն", "Urtica dioca"],
      image: "img/եղինջ.png",
      alt: "urtica",
    },
    {
      url: "sambucus",
      title: "Թանթրվենի Սև",
      keywords: ["Թանթրվենի Սև", "Sambucus nigra"],
      image: "img/թանթրվենի.png",
      alt: "sambucus",
    },
    {
      url: "melilotus",
      title: "Իշառվույտ Դեղատու",
      keywords: ["Իշառվույտ Դեղատու", "Melilotus officinalis"],
      image: "img/իշառվույտ.png",
      alt: "melilotus",
    },
    {
      url: "bryonia",
      title: "Լոշտակ Սպիտակ",
      keywords: ["Լոշտակ Սպիտակ", "Bryonia alba"],
      image: "img/լոշտակ.png",
      alt: "bryonia",
    },
    {
      url: "tilia",
      title: "Լորենի",
      keywords: ["Լորենի", "Tilia"],
      image: "img/լորենի.jpeg",
      alt: "tilia",
    },
    {
      url: "taraxacum",
      title: "Խատուտիկ Դեղատու",
      keywords: ["Խատուտիկ Դեղատու", "Taraxacum officinalis"],
      image: "img/խատուտիկ.jpg",
      alt: "taraxacum",
    },
    {
      url: "origanum",
      title: "Խնկածաղիկ Սովորոկան",
      keywords: ["Խնկածաղիկ Սովորոկան", "Origanum vulgare"],
      image: "img/խնկածաղիկ.png",
      alt: "origanum",
    },
    {
      url: "acorus",
      title: "Խնկեղեգ Եղեգնային",
      keywords: ["Խնկեղեգ Եղեգնային", "Acorus calamus"],
      image: "img/խնկեղեգ.png",
      alt: "acorus",
    },
    {
      url: "verbascum",
      title: "Խռնդատ",
      keywords: ["Խռնդատ", "Verbascum"],
      image: "img/խռնդատ.png",
      alt: "verbascum",
    },
    {
      url: "chelidonium",
      title: "Ծիծեռնախոտ Մեծ",
      keywords: ["Ծիծեռնախոտ Մեծ", "Chelidonium majus"],
      image: "img/ծիծեռնախոտ.jpg",
      alt: "chelidonium",
    },
    {
      url: "asparagus",
      title: "Ծնեբեկ Դեղատու",
      keywords: ["Ծնեբեկ Դեղատու", "Asparagus officinalis"],
      image: "img/ծնեբեկ.png",
      alt: "asparagus",
    },
    {
      url: "armoracia",
      title: "Ծովաբողկ Գյուղական",
      keywords: ["Ծովաբողկ Գյուղական", "Armoracia rusticana"],
      image: "img/ծովաբողկ.png",
      alt: "armoracia",
    },
    {
      url: "berberis",
      title: "Ծորենի Սովորական",
      keywords: ["Ծորենի Սովորական", "Berberis vulgaris"],
      image: "img/ծորենի.png",
      alt: "berberis",
    },
    {
      url: "quercus",
      title: "Կաղնի",
      keywords: ["Կաղնի", "Quercus"],
      image: "img/կաղնի.png",
      alt: "quercus",
    },
    {
      url: "onopordon",
      title: "Կաղշնակ Սովորական",
      keywords: ["Կաղշնակ Սովորական", "Onopordon acanthium"],
      image: "img/կաղշնակ.png",
      alt: "onopordon",
    },
    {
      url: "bidens",
      title: "Կատվալեզու Եռաբաժան",
      keywords: ["Կատվալեզու Եռաբաժան", "Bidens tripartitus"],
      image: "img/կատվալեզու.jpeg",
      alt: "bidens",
    },
    {
      url: "valeriana",
      title: "Կատվախոտ Դեղատու",
      keywords: ["Կատվախոտ Դեղատու", "Valeriana officinalis"],
      image: "img/կատվախոտ.png",
      alt: "valeriana",
    },
    {
      url: "inula",
      title: "Կղմուխ Հեղինեի",
      keywords: ["Կղմուխ Հեղինեի", "Inula helenium"],
      image: "img/կղմուխ.jpeg",
      alt: "inula",
    },
    {
      url: "arctium",
      title: "Կռատուկ",
      keywords: ["Կռատուկ", "Arctium"],
      image: "img/կռատուկ.jpeg",
      alt: "arctium",
    },
    {
      url: "achillea",
      title: "Հազարատերևուկ Հատվածատերև",
      keywords: ["Հազարատերևուկ Հատվածատերև", "Achillea millefolium"],
      image: "img/հազարատերևուկ.jpg",
      alt: "achillea",
    },
    {
      url: "senecio",
      title: "Հալևորիկ Ռոմբատերև",
      keywords: ["Հալևորիկ Ռոմբատերև", "Senecio rhombifolius"],
      image: "img/հալևորիկ.jpg",
      alt: "senecio",
    },
    {
      url: "equisetum",
      title: "Ձիաձետ Դաշտային",
      keywords: ["Ձիաձետ Դաշտային", "Equisetum arvense"],
      image: "img/ձիաձետ.jpg",
      alt: "equisetum",
    },
    {
      url: "allium",
      title: "Ղանձիլ",
      keywords: ["Ղանձիլ", "Allium ursinum"],
      image: "img/ղանձիլ.png",
      alt: "allium",
    },
    {
      url: "galium",
      title: "Մակարդախոտ Իսկական",
      keywords: ["Մակարդախոտ Իսկական", "Galium verum"],
      image: "img/մակարդախոտ.jpg",
      alt: "galium",
    },
    {
      url: "prunus",
      title: "Մամխի Փշոտ",
      keywords: ["Մամխի Փշոտ", "Prunus spinosa"],
      image: "img/մամխի.png",
      alt: "prunus",
    },
    {
      url: "polygonum",
      title: "Մանդիկ Մսագույն",
      keywords: ["Մանդիկ Մսագույն", "Polygonum carneum"],
      image: "img/մանդիկ.png",
      alt: "polygonum",
    },
    {
      url: "rosa",
      title: "Մասրենի",
      keywords: ["Մասրենի", "Rosa"],
      image: "img/մասրենի.jpeg",
      alt: "rosa",
    },
    {
      url: "digitalis",
      title: "Մատնոցուկ Ժանգային",
      keywords: ["Մատնոցուկ Ժանգային", "Digitalis ferruginea"],
      image: "img/մատնոցուկ.png",
      alt: "digitalis",
    },
    {
      url: "marrubium",
      title: "Մեղրածուծ Սովորական",
      keywords: ["Մեղրածուծ Սովորական", "Marrubium vulgare"],
      image: "img/մեղրածուծ.jpeg",
      alt: "marrubium",
    },
    {
      url: "viscum",
      title: "Մղամուճ Սպիտակ",
      keywords: ["Մղամուճ Սպիտակ", "Viscum allum"],
      image: "img/մղամուճ.jpeg",
      alt: "viscum",
    },
    {
      url: "rubus-caesius",
      title: "Մոշենի",
      keywords: ["Մոշենի", "Rubus caesius"],
      image: "img/մոշենի.png",
      alt: "rubus-caesius",
    },
    {
      url: "arum",
      title: "Նվիկ Արևելյան",
      keywords: ["Նվիկ Արևելյան", "Arum orientale"],
      image: "img/նվիկ.png",
      alt: "arum",
    },
    {
      url: "echinops",
      title: "Ոզնենի Կարմրագլուխ",
      keywords: ["Ոզնենի Կարմրագլուխ", "Echinops spherocephalus"],
      image: "img/ոզնենի.png",
      alt: "echinops",
    },
    {
      url: "hippophae",
      title: "Չիչխան",
      keywords: ["Չիչխան", "hippophae"],
      image: "img/չիչխան.jpeg",
      alt: "hippophae",
    },
    {
      url: "agropyron",
      title: "Սեզ Սողացող",
      keywords: ["Սեզ Սողացող", "Agropyron repens"],
      image: "img/սեզ.jpeg",
      alt: "agropyron",
    },
    {
      url: "polygonatum",
      title: "Սինդրիկ",
      keywords: ["Սինդրիկ", "Polygonatum Adans"],
      image: "img/սինդրիկ.png",
      alt: "polygonatum",
    },
    {
      url: "peganum",
      title: "Սպանդ Սովորական",
      keywords: ["Սպանդ Սովորական", "Peganum harmala"],
      image: "img/սպանդ.png",
      alt: "peganum",
    },
    {
      url: "hypericum",
      title: "Սրոհունդ Սովորական",
      keywords: ["Սրոհունդ Սովորական", "Hypericum perforatum"],
      image: "img/սրոհունդ.png",
      alt: "hypericum",
    },
    {
      url: "tussillago",
      title: "Տատրակ Սովորական",
      keywords: ["Տատրակ Սովորական", "Tussillago farfara"],
      image: "img/տատրակ.jpeg",
      alt: "tussillago",
    },
    {
      url: "centaurea",
      title: "Տերեփուկ Կապույտ",
      keywords: ["Տերեփուկ Կապույտ", "Centaurea cyanus"],
      image: "img/տերեփուկ.jpg",
      alt: "centaurea",
    },
    {
      url: "rubia",
      title: "Տորոն Ներկատու",
      keywords: ["Տորոն Ներկատու", "Rubia tinctorum"],
      image: "img/տորոն.png",
      alt: "rubia",
    },
    {
      url: "althaea",
      title: "Տուղտ Դեղատու",
      keywords: ["Տուղտ Դեղատու", "Althaea officinalis"],
      image: "img/տուղտ.png",
      alt: "althaea",
    },
    {
      url: "thymus",
      title: "ՈՒրց Սողացող",
      keywords: ["ՈՒրց Սողացող", "Thymus serpyllum"],
      image: "img/ուրց.jpg",
      alt: "thymus",
    },
    {
      url: "pulsatilla",
      title: "Քնախոտ",
      keywords: ["Քնախոտ", "Pulsatilla Adans"],
      image: "img/քնախոտ.png",
      alt: "pulsatilla",
    },
    {
      url: "saponaria",
      title: "Օճառախոտ Դեղատու",
      keywords: ["Օճառախոտ Դեղատու", "Saponaria officinalis"],
      image: "img/օճառախոտ.jpg",
      alt: "saponaria",
    },
    {
      url: "artemisia",
      title: "Օշինդր Դառը",
      keywords: ["Օշինդր Դառը", "Artemisia absinthium"],
      image: "img/օշինդր.jpeg",
      alt: "artemisia",
    },
  ];
}
