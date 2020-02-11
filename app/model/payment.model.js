module.exports = (sequelize, Sequelize) => {
	const Payment = sequelize.define('payments', {
		firstname: { type: Sequelize.STRING },
		lastname: { type: Sequelize.STRING },
		price: { type: Sequelize.BIGINT },
		card_no: { type: Sequelize.BIGINT },
		month: { type: Sequelize.BIGINT },
		year: { type: Sequelize.BIGINT },
		ccv: { type: Sequelize.BIGINT },
		line1: { type: Sequelize.STRING },
		city: { type: Sequelize.STRING },
		state: { type: Sequelize.STRING },
		postal_code: { type: Sequelize.BIGINT },
		userId: { type: Sequelize.STRING },
	
	});
	return Payment;
}