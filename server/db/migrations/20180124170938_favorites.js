exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', (table) => {
    table.integer('provider_id').notNullable()
    table.integer('user_id').notNullable()
    table.foreign('provider_id').references('centers.id')
    table.foreign('user_id').references('users.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorites')
}
