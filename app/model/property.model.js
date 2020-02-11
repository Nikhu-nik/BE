module.exports = (sequelize, Sequelize) => {
	const Property = sequelize.define('property', {
		propertyname: {
			type: Sequelize.STRING
		},
		propertyprice: {
			type: Sequelize.INTEGER(6)
		},
		propertydesc: {
			type: Sequelize.STRING
		},
		category: {
			type: Sequelize.STRING
		},
		propertyimage: {
			type: Sequelize.STRING
		},
		propertyimage1: {
			type: Sequelize.STRING
		},
		propertyimage2: {
			type: Sequelize.STRING
		},
		propertyimage3: {
			type: Sequelize.STRING
		},
		propertyimage4: {
			type: Sequelize.STRING
		},
		userId: {
			type: Sequelize.INTEGER(6)
		},
	});
	return Property;
}