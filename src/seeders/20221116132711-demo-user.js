'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Members', [{
      MemberName:'NMHieu',
      AccountName:'hieu0000',
      Address:'50 Tien SOn',
      City: 'NhaTrang',
      Country: 'VN',
      IsAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Members', null, {});
  }
};

