
exports.up = function(knex, Promise) {
  return knex.schema.createTable("appointment", (table)=>{
    table.increments();
    table.time("time");
    table.string("location");
    table.integer("user_id")
      .notNullable()
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true,true);


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("appointment");
};
