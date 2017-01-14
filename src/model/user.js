export default (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		firstName: {
			type: DataTypes.STRING,
			field: 'first_name'
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
