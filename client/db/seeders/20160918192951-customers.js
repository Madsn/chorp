module.exports = {
  up: queryInterface => {
    const currentDate = Date();
    const customers = [];
    for (let i = 1; i < 20; i += 1) {
      customers.push({
        firstName: `first-${i}`,
        lastName: `last-${i}`,
        address: `address-${i}`,
        phoneNumber: `${i}`,
        email: `email-${i}`,
        createdAt: currentDate,
        updatedAt: currentDate,
      });
    }
    return queryInterface.bulkInsert('Customer', customers, {});
  },

  down: queryInterface => queryInterface.bulkDelete('Customer', null, {}),
};
