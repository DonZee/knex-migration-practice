
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointment').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointment').insert([
        {time:"9:45", location:'the beach', user_id:1},
        {time:"11:00", location:'trailer park', user_id:2},
        {time: "10:15", location:'under the bridge', user_id:3}
      ]);
    });
};
