const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
let upload = require('../config/multer.config.js');
let products = require('../config/storage.js');
let property = require('../config/property.js');
var express = require('express');
module.exports = function(app) {

    const controller = require('../controller/controller.js');
 
	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);
	
	app.post('/api/auth/signin', controller.signin);
	
	app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);
	
	app.get('/api/userdetails', [authJwt.verifyToken], controller.adminContent);
	
	app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);
	
	app.get('/api/userList', [authJwt.verifyToken, authJwt.isAdmin], controller.userList);
	
	app.get('/api/productCount', [authJwt.verifyToken, authJwt.isAdmin], controller.productCount);
	
	app.get('/api/userCount', [authJwt.verifyToken, authJwt.isAdmin], controller.userCount);
	
	app.use('/products', express.static(process.cwd() + '/products'))  //nodejs server.js
	app.use('/property', express.static(process.cwd() + '/property'))

	app.get('/api/productList', [authJwt.verifyToken], controller.productList);
	app.get('/api/propertyList', [authJwt.verifyToken], controller.propertyList);
	app.get('/api/dashproductList', [authJwt.verifyToken], controller.dashproductList);
	
	app.get('/api/userview',[authJwt.verifyToken], controller.userview);
	
	app.get('/api/updateuser/:id/:status',[authJwt.verifyToken], controller.updateUserStatus);
	app.get('/api/updateProduct/:id/:status',[authJwt.verifyToken], controller.updateProductStatus);
	app.get('/api/editprod/:id',[authJwt.verifyToken], controller.editprod);

	app.put('/api/updatwallet/:id/', [authJwt.verifyToken], controller.Updatewallet);
	app.get('/api/get/:id/', [authJwt.verifyToken], controller.wallet);
	app.get('/api/productdetails/:id/',[authJwt.verifyToken],  controller.productdetails);
	app.get('/api/cartCount', [authJwt.verifyToken],controller.cartCount);
	app.put('/api/updatesProduct/:id/', [authJwt.verifyToken], controller.UpdateProduct)


	app.post('/api/product/admin',[authJwt.verifyToken], controller.product);
	app.post('/api/property/admin',[authJwt.verifyToken], controller.property);

	//addproductdetails
	app.post('/api/addproductdetails',[authJwt.verifyToken],  controller.addproductdetails);
	app.post('/api/addtocart', [authJwt.verifyToken], controller.addtoCart);
	
	
	app.post('/api/file/upload', upload.array("file"),  controller.reseller);
		app.post('/api/file/product', products.array("file"),  controller.products);
		app.post('/api/file/property', property.array("file"),  controller.properties);
		
app.get('/api/file/all', controller.listUrlFiles);

app.get('/api/file/:filename',  controller.downloadFile);
}
