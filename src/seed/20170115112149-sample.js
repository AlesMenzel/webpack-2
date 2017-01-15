'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
	  return queryInterface.bulkInsert('Users', [{
		  firstName: 'John',
		  lastName: 'Doe',
		  email: 'johndoe@gmail.com',
		  createdAt: new Date(),
		  updatedAt: new Date()
	  }], {});
  },

  down: function (queryInterface, Sequelize) {
	  return queryInterface.bulkDelete('Users', null, {});
  }
};
