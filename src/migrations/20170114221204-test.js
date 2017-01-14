module.exports = {
	up: function(queryInterface, Sequelize, done) {
		queryInterface.addColumn(
			'Users',
			'email',
			{
				type: Sequelize.STRING,
				allowNull: true
			}
		).then(() => {
			done();
		});
	},

	down: function(queryInterface) {
		return queryInterface.removeColumn('Users', 'email');
	}
};
