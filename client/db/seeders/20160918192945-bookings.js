module.exports = {
  up: queryInterface => {
    const currentDate = Date();
    const bookings = [];
    for (let i = 1; i < 20; i += 1) {
      bookings.push({
        category: `Category-${i}`,
        customerId: `${i}`,
        details: `Details-${i}`,
        status: `Status-${i}`,
        createdAt: currentDate,
        updatedAt: currentDate,
      });
    }
    return queryInterface.bulkInsert('Booking', bookings, {});
  },

  down: queryInterface => queryInterface.bulkDelete('Booking', null, {}),
};
