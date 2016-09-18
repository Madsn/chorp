module.exports = {
  up: queryInterface => {
    const currentDate = Date();
    return queryInterface.bulkInsert('Customer', [{
      createdAt: currentDate,
      updatedAt: currentDate,
    }, {
      createdAt: currentDate,
      updatedAt: currentDate,
    }, {
      createdAt: currentDate,
      updatedAt: currentDate,
    }, {
      createdAt: currentDate,
      updatedAt: currentDate,
    }, {
      createdAt: currentDate,
      updatedAt: currentDate,
    }, {
      createdAt: currentDate,
      updatedAt: currentDate,
    }], {});
  },

  down: queryInterface => queryInterface.bulkDelete('Customer', null, {}),
};
