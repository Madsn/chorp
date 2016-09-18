module.exports = {
  up: queryInterface => {
    const currentDate = Date();
    return queryInterface.bulkInsert('Customer', [{
      created_at: currentDate,
      updated_at: currentDate,
    }, {
      created_at: currentDate,
      updated_at: currentDate,
    }, {
      created_at: currentDate,
      updated_at: currentDate,
    }, {
      created_at: currentDate,
      updated_at: currentDate,
    }, {
      created_at: currentDate,
      updated_at: currentDate,
    }, {
      created_at: currentDate,
      updated_at: currentDate,
    }], {});
  },

  down: queryInterface => queryInterface.bulkDelete('Customer', null, {}),
};
