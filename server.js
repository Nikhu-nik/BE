var express = require('express');
var app = express();
cors = require('cors');
var formidable = require('formidable');
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json())



app.use(cors({ origin: true }));
global.__basedir = __dirname;
require('./app/router/router.js')(app);

const db = require('./app/config/db.config.js');

const Role = db.role;
const Category = db.category;
  
// force: true will drop the table if it already exists
db.sequelize.sync({alter:true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
  category();
});
 
//require('./app/route/project.route.js')(app);
 

// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})


function initial(){
	Role.create({
		id: 1,
		name: "USER"
	});
	
	Role.create({
		id: 2,
		name: "ADMIN"
	});
	
	Role.create({
		id: 3,
		name: "PM"
	});
}


function category(){
	Category.create({
		id: 1,
		name: "Electronics"
	});
	
	Category.create({
		id: 2,
		name: "Mobile&Tablets"
	});
	
	Category.create({
		id: 3,
		name: "Home_Appliances"
	});
	Category.create({
		id: 4,
		name: "Mobile_Accessory"
	});
	
}