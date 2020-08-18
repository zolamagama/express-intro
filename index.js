const express = require('express');
const app = express();
// npm install --save express-handlebars
const exphbs  = require('express-handlebars')
// npm install --save body-parser
const bodyParser = require('body-parser')
const transportFee = require('./transportFee');

// console.log(transportFee('morning'));
// console.log(transportFee('afternoon'));
// console.log(transportFee('nightshift'));

app.use(bodyParser.urlencoded({extented: false}));
app.use(bodyParser.json());


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// after you restart the app
app.get("/", function(req, res){
    res.render("index")
});
app.post("/fee", function(req, res){
    const price = transportFee(req.body.shift)
    res.render("fee", {price})
});
app.get("/zola", function(req, res){
res.send("Zola")
console.log('Zola')
});

app.get("/fee/:time", function(req, res){
theFee = transportFee(req.params.time);
res.send("The time specified: " + theFee);

});


app.listen(3007, function() {
console.log('App started on port 3007');

});






































// let express = require('express');
// let app = express();
// const exphbs  = require('express-handlebars')

// app.get('/', function (req, res) {
//     res.render('home');
// });

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// let PORT = process.env.PORT || 3007;

// app.listen(PORT, function(){
//   console.log('App starting on port', PORT);
// });