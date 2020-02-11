const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
let upload = require('../config/multer.config.js');
let products = require('../config/storage.js');
let property = require('../config/property.js');
let profile = require('../config/profile.js');
var express = require('express');

var paypal = require('paypal-rest-sdk');

var client_id = 'YOUR CLIENT ID';
var secret = 'YOUR SECRET';

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AfCNzg9cgGC3M0bktEqp3WjYRmR0wwXHQ5U3B0_wnVyCB_jS3rbYieEsw9dMSzT-GxAMt8PeQ0AzIDk9',
    'client_secret': 'EI15l7nFfRwF3Tn3amW3fnXAYA4TPBjjYWvIkPL9L1GQdIhc6MHBYblgPnsJ7p3F4R_16KXH0IOsilo5'
});



module.exports = function (app) {

	const controller = require('../controller/controller.js');
	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);
	app.post('/api/auth/signin', controller.signin);
	app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);
	app.get('/api/userdetails', [authJwt.verifyToken], controller.adminContent);
	app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);
	app.get('/api/userList', [authJwt.verifyToken], controller.userList);
	app.get('/api/productCount', [authJwt.verifyToken, authJwt.isAdmin], controller.productCount);
	app.get('/api/userCount', [authJwt.verifyToken, authJwt.isAdmin], controller.userCount);
	app.use('/products', express.static(process.cwd() + '/products'))  //nodejs server.js
	app.use('/property', express.static(process.cwd() + '/property'))
	app.use('/profile', express.static(process.cwd() + '/profile'))
	app.get('/api/productList', [authJwt.verifyToken], controller.productList);
	app.get('/api/propertyList', [authJwt.verifyToken], controller.propertyList);
	app.get('/api/dashproductList', [authJwt.verifyToken], controller.dashproductList);
	app.get('/api/category', [authJwt.verifyToken], controller.Category);
	app.delete('/api/destroy', [authJwt.verifyToken], controller.destroy);
	app.delete('/api/destroyOne/:id', [authJwt.verifyToken], controller.destroyOne);
	app.delete('/api/destroyUser/:id', [authJwt.verifyToken], controller.destroyUser);
	app.delete('/api/destroyProduct/:id', [authJwt.verifyToken], controller.destroyProduct);
	app.delete('/api/destroyProperty/:id', [authJwt.verifyToken], controller.destroyProperty);
	app.delete('/api/destroywish/:id', [authJwt.verifyToken], controller.destroywish);
	app.get('/api/userview', [authJwt.verifyToken], controller.userview);
	app.get('/api/updateuser/:id/:status', [authJwt.verifyToken], controller.updateUserStatus);
	app.get('/api/updateProduct/:id/:status', [authJwt.verifyToken], controller.updateProductStatus);
	app.get('/api/editprod/:id', [authJwt.verifyToken], controller.editprod);
	app.put('/api/updatwallet/:id/', [authJwt.verifyToken], controller.Updatewallet);
	app.get('/api/get/:id/', [authJwt.verifyToken], controller.wallet);
	app.get('/api/productdetails/:id/', [authJwt.verifyToken], controller.productdetails);
	app.get('/api/cartCount', [authJwt.verifyToken], controller.cartCount);
	app.get('/api/total', [authJwt.verifyToken], controller.cartCounts);
	app.put('/api/updatesProduct/:id/', [authJwt.verifyToken], controller.UpdateProduct);
	app.get('/api/service/:service/', [authJwt.verifyToken], controller.service);
	app.get('/api/productName', [authJwt.verifyToken], controller.productName);
	app.put('/api/updatepass/', controller.updatePass);
	app.get('/api/getprname', [authJwt.verifyToken], controller.productname);
	app.get('/api/revenue', [authJwt.verifyToken], controller.revenue);
	app.post('/api/product/admin', [authJwt.verifyToken], controller.product);
	app.post('/api/property/admin', [authJwt.verifyToken], controller.property);
	app.post('/api/addproductdetails', [authJwt.verifyToken], controller.addproductdetails);
	app.post('/api/addtocart', [authJwt.verifyToken], controller.addtoCart);
	app.post('/api/order', [authJwt.verifyToken], controller.order);
	app.post('/api/wish', [authJwt.verifyToken], controller.wish);
	app.post('/api/AddtoOrder', [authJwt.verifyToken], controller.AddtoOrder);
	app.get('/api/getorder', [authJwt.verifyToken], controller.orderList);
	app.get('/api/getwish', [authJwt.verifyToken], controller.wishList);
	app.get('/api/orderCount', [authJwt.verifyToken], controller.orderCount);
	app.get('/api/AdminorderList', [authJwt.verifyToken], controller.AdminorderList);
	app.get('/api/getcart', [authJwt.verifyToken], controller.cartlist);
	// app.get('/api/card', [authJwt.verifyToken], controller.paypal);

	app.post('/api/file/upload', upload.array("file"), controller.reseller);
	app.post('/api/card', controller.card);
	app.post('/api/file/product', products.array("file"), controller.products);
	app.post('/api/file/property', property.array("file"), controller.properties);
	app.post('/api/file/profile', profile.array("file"), controller.profile);
	app.get('/api/file/all', controller.listUrlFiles);
	app.get('/api/file/:filename', controller.downloadFile);
	app.put('/api/file/profileupdate', [authJwt.verifyToken], controller.updateProfile);


	/* app.post('/card',function(req,res){
// app.globalAmount=req.body.amount;
		var create_payment_json = {
			"intent": "sale",
			"payer": {
			  "payment_method": "credit_card",
			  "funding_instruments": [{
				"credit_card": {
				  "type": "visa",
				  "number": "4417119669820331",
				  "expire_month": "11",
				  "expire_year": "2018",
				  "cvv2": "874",
				  "first_name": "Joe",
				  "last_name": "Shopper",
				  "billing_address": {
					"line1": "52 N Main ST",
					"city": "Johnstown",
					"state": "OH",
					"postal_code": "43210",
					"country_code": "US" }}}]},
			"transactions": [{
			  "amount": {
				"total": "7.47",
				"currency": "USD",
				"details": {
				  "subtotal": "7.41",
				  "tax": "0.03",
				  "shipping": "0.03"}},
			  "description": "This is the payment transaction description." 
			}]
		};
		
		paypal.payment.create(create_payment_json, function (error, payment) {
			if(error){
				console.error(error);
			  } else {
				console.log(payment);
			  }
		});
		
	}) */
	
}
