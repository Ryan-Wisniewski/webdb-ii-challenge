
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'test1', make: 'Ford', model: 'Ranger', mileage: 65249},
        {VIN: 'test2', make: 'Honda', model: 'Accord', mileage: 5249},
        {VIN: 'test3', make: 'Ford', model: 'Ranger', mileage: 76529}
      ]);
    });
};
