
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Tom',email: 'tom@shady.com',password:'passwerd'},
        {name: 'Hector',email: 'juarez@sonora.com',password:'tacoTuesday'},
        {name: 'Dinesh',email: 'pardoned@trump.gov',password:'wasntMe'}
      ]);
    });
};
