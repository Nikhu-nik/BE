module.exports = (sequelize, Sequelize) => {
	const Reseller = sequelize.define('resellers', {
	
	  Business_name: {type: Sequelize.STRING},
	  owner_name:{type:Sequelize.STRING },
	  owneraddress: {type:Sequelize.STRING},
	  Email_address: {type:Sequelize.STRING},
	  Web_address: {type:Sequelize.STRING},
	  contact_no: {type:Sequelize.INTEGER(10)},
	  phone_no: {type:Sequelize.BIGINT},
	    Registration_certificate: {type:Sequelize.STRING},  
		GST_Certificate: {type:Sequelize.STRING},  
		Pan_card: {type:Sequelize.STRING},
		  Product_category: {type:Sequelize.STRING},
		    complete_address: {type:Sequelize.STRING},
		    Wallet: {type:Sequelize.INTEGER(10)},
		    Balance: {type:Sequelize.INTEGER(10)},
	  
	
	});
	
	return Reseller;
}

