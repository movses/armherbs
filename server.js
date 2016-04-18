var express = require('express');
var app = express();
var fs = require('fs');

var public = '/public/';
var herbs_path = public + 'herbs/';

app.use(express.static(__dirname + public));

app.get('/hippophae', function (req, res) {
    fs.readFile( __dirname + herbs_path + "չիչխան.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/rubus-idaeus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "ազնվամորի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/crataegus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "ալոճենի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/mentha', function (req, res) {
    fs.readFile( __dirname + herbs_path + "անանուխ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});
app.get('/helichrysium', function (req, res) {
    fs.readFile( __dirname + herbs_path + "անթառամ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});
app.get('/leonurus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "առյուծագի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/sanguisorba', function (req, res) {
    fs.readFile( __dirname + herbs_path + "արյունխմիկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/astragalus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "գազ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/cuscuta', function (req, res) {
    fs.readFile( __dirname + herbs_path + "գաղձ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/daphne', function (req, res) {
    fs.readFile( __dirname + herbs_path + "գայլահատ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/humulus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "գայլուկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/fragaria', function (req, res) {
    fs.readFile( __dirname + herbs_path + "գետնամորի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/juniperus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "գիհի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/prumula', function (req, res) {
    fs.readFile( __dirname + herbs_path + "Գնարբուկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/plantago', function (req, res) {
    fs.readFile( __dirname + herbs_path + "եզան-լեզու.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/ononis', function (req, res) {
    fs.readFile( __dirname + herbs_path + "եզնարգել.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/cichorium', function (req, res) {
    fs.readFile( __dirname + herbs_path + "եղերդակ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/urtica', function (req, res) {
    fs.readFile( __dirname + herbs_path + "եղինջ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/sambucus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "թանթրվենի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/melilotus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "իշառվույտ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/bryonia', function (req, res) {
    fs.readFile( __dirname + herbs_path + "լոշտակ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/tilia', function (req, res) {
    fs.readFile( __dirname + herbs_path + "լորենի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/taraxacum', function (req, res) {
    fs.readFile( __dirname + herbs_path + "խատուտիկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/origanum', function (req, res) {
    fs.readFile( __dirname + herbs_path + "խնկածաղիկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/acorus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "խնկեղեգ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/verbascum', function (req, res) {
    fs.readFile( __dirname + herbs_path + "խռնդատ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/chelidonium', function (req, res) {
    fs.readFile( __dirname + herbs_path + "ծիծեռնախոտ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/asparagus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "ծնեբեկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/armoracia', function (req, res) {
    fs.readFile( __dirname + herbs_path + "ծովաբողկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/berberis', function (req, res) {
    fs.readFile( __dirname + herbs_path + "ծորենի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/quercus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "կաղնի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/bidens', function (req, res) {
    fs.readFile( __dirname + herbs_path + "կատվալեզու.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/onopordon', function (req, res) {
    fs.readFile( __dirname + herbs_path + "կաղշնակ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/valeriana', function (req, res) {
    fs.readFile( __dirname + herbs_path + "կատվախոտ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/inula', function (req, res) {
    fs.readFile( __dirname + herbs_path + "կղմուխ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/arctium', function (req, res) {
    fs.readFile( __dirname + herbs_path + "կռատուկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/achillea', function (req, res) {
    fs.readFile( __dirname + herbs_path + "հազարատերևուկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/senecio', function (req, res) {
    fs.readFile( __dirname + herbs_path + "հալևորիկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/equisetum', function (req, res) {
    fs.readFile( __dirname + herbs_path + "ձիաձետ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/allium', function (req, res) {
    fs.readFile( __dirname + herbs_path + "ղանձիլ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/galium', function (req, res) {
    fs.readFile( __dirname + herbs_path + "մակարդախոտ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/prunus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "մամխի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/polygonum', function (req, res) {
    fs.readFile( __dirname + herbs_path + "մանդիկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/rosa', function (req, res) {
    fs.readFile( __dirname + herbs_path + "մասրենի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/digitalis', function (req, res) {
    fs.readFile( __dirname + herbs_path + "մատնոցուկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/marrubium', function (req, res) {
    fs.readFile( __dirname + herbs_path + "մեղրածուծ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/viscum', function (req, res) {
    fs.readFile( __dirname + herbs_path + "մղամուճ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/rubus-caesius', function (req, res) {
    fs.readFile( __dirname + herbs_path + "մոշենի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/arum', function (req, res) {
    fs.readFile( __dirname + herbs_path + "նվիկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/echinops', function (req, res) {
    fs.readFile( __dirname + herbs_path + "ոզնենի.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/agropyron', function (req, res) {
    fs.readFile( __dirname + herbs_path + "սեզ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/humulus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "գայլուկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/polygonatum', function (req, res) {
    fs.readFile( __dirname + herbs_path + "սինդրիկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/peganum', function (req, res) {
    fs.readFile( __dirname + herbs_path + "սպանդ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/hypericum', function (req, res) {
    fs.readFile( __dirname + herbs_path + "սրոհունդ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/tussillago', function (req, res) {
    fs.readFile( __dirname + herbs_path + "տատրակ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/centaurea', function (req, res) {
    fs.readFile( __dirname + herbs_path + "տերեփուկ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/rubia', function (req, res) {
    fs.readFile( __dirname + herbs_path + "տորոն.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/althaea', function (req, res) {
    fs.readFile( __dirname + herbs_path + "տուղտ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/thymus', function (req, res) {
    fs.readFile( __dirname + herbs_path + "ուրց.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/pulsatilla', function (req, res) {
    fs.readFile( __dirname + herbs_path + "քնախոտ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/saponaria', function (req, res) {
    fs.readFile( __dirname + herbs_path + "օճառախոտ.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/artemisia', function (req, res) {
    fs.readFile( __dirname + herbs_path + "օշինդր.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/under-construction', function (req, res) {
    fs.readFile( __dirname + herbs_path + "under-construction.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/', function (req, res) {
  fs.readFile( __dirname + public + "index.html", 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
});


var server = app.listen(process.env.PORT || 8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("listening at http://%s:%s", host, port)

});
