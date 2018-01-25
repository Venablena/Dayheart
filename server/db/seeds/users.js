
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Testy', last_name: 'McTest', email: 'test@test.com'},
        {first_name: 'Lena', last_name: 'Venable', email: 'venablena@gmail.com'},
        {first_name: 'This', last_name: 'Person', email: 'personal@email.com'}
      ]);
    });
};
