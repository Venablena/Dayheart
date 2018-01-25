exports.up = function(knex, Promise) {
  return knex.schema.createTable('centers', (table) => {
      table.increments()
      table.string('Provider_ID').notNullable()
      table.string('SSPS').notNullable()
      table.string('License_ID')
      table.string('License_Cert')
      table.string('Authority')
      table.string('Name').notNullable()
      table.string('License_Starts')
      table.string('License_Expires')
      table.string('Phone')
      table.string('Email')
      table.integer('Capacity')
      table.string('Ages')
      table.integer('AgeFromMonths')
      table.integer('AgeToMonths')
      table.string('EarlyAchieversStatus')
      table.string('Addr1')
      table.string('Addr2')
      table.string('Addr3')
      table.string('City')
      table.string('State')
      table.integer('Zip')
      table.string('County')
      table.string('ServiceArea')
      table.string('Latitude')
      table.string('Longitude')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('centers')
};
