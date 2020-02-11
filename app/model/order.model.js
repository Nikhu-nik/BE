module.exports = (sequelize, Sequelize) => {
	const Order = sequelize.define('order', {
		name: { type: Sequelize.Sequelize.STRING },
		price: { type: Sequelize.STRING },
		quantity: { type: Sequelize.STRING },
		image: { type: Sequelize.STRING },
		total: { type: Sequelize.STRING },
		productId: { type: Sequelize.STRING },
		userId: { type: Sequelize.STRING }
	});
	return Order;
}

