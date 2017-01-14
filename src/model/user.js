export default (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		firstName: {
			type: DataTypes.STRING
		},
		lastName: {
			type: DataTypes.STRING
		}
	}, {
		classMethods: {
			associate: function (models) {

			}
		}
	});

	return User;
};
