var fs = require("fs" );



// Lecture asynchrone

fs.readFile('welcome.txt', function (err, data) {

   if (err) {

      return console.error(err) ;

   }

   console.log("Lecture asynchrone : "  + data.toString()) ;

}) ;



// Lecture synchrone

var data = fs.readFileSync('welcome.txt') ;

console.log("Lecture synchrone : "  + data.toString()) ;



console.log("Programme terminé" );