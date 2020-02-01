module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
	  Business_name: {type: Sequelize.STRING},
	  owner_name:{type:Sequelize.STRING },
	  owneraddress: {type:Sequelize.STRING},
	  Email_address: {type:Sequelize.STRING},
	  Gst_no: {type:Sequelize.STRING},
	  photo: {type:Sequelize.STRING},
	
	
	  phone_no: {type:Sequelize.BIGINT},
	    Registration_certificate: {type:Sequelize.STRING},  
		GST_Certificate: {type:Sequelize.STRING},  
		Pan_card: {type:Sequelize.STRING},
				cpass: {type:Sequelize.STRING},
						password: {type:Sequelize.STRING},
		  Product_category: {type:Sequelize.STRING},
				complete_address: {type:Sequelize.STRING},
				status:{type:Sequelize.STRING},
				   Wallet: {type:Sequelize.INTEGER(15)},
		    Balance: {type:Sequelize.INTEGER(10)},
	});
	
	return User;
}