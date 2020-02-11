module.exports = (sequelize, Sequelize) => {
	const Product = sequelize.define('product', {
		name: {
			type: Sequelize.STRING
		},
		sub: {
			type: Sequelize.STRING
		},

		price: {
			type: Sequelize.INTEGER(6)
		},
		discount: {
			type: Sequelize.STRING
		},
		desc: {
			type: Sequelize.STRING
		},
		category: {
			type: Sequelize.STRING
		},
		image: {
			type: Sequelize.STRING
		},
		image1: {
			type: Sequelize.STRING
		},
		image2: {
			type: Sequelize.STRING
		},
		image3: {
			type: Sequelize.STRING
		},
		image4: {
			type: Sequelize.STRING
		},
		status: {
			type: Sequelize.STRING
		},
		userId: {
			type: Sequelize.INTEGER(6)
		},


	});
	return Product;
}