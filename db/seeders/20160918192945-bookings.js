module.exports = {
  up: queryInterface => {
    const currentDate = Date();
    const bookings = [];
    for (let i = 0; i < 20; i += 1) {
      bookings.push({
        category: `Category-${i}`,
        customer: `Customer-${i}`,
        details: `Details-${i}`,
        status: `Status-${i}`,
        created_at: currentDate,
        updated_at: currentDate,
      });
    }
    return queryInterface.bulkInsert('Booking', bookings, {});
  },

  down: queryInterface => queryInterface.bulkDelete('Booking', null, {}),
};
