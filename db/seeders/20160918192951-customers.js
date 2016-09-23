module.exports = {
  up: queryInterface => {
    const currentDate = Date();
    const customers = [];
    for (let i = 1; i < 20; i += 1) {
      customers.push({
        name: `${i}`,
        createdAt: currentDate,
        updatedAt: currentDate,
      });
    }
    return queryInterface.bulkInsert('Customer', customers, {});
  },

  down: queryInterface => queryInterface.bulkDelete('Customer', null, {}),
};
