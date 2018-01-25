const fs = require('fs')
const path = require('path')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('centers').del()
    .then(function () {
  // Inserts seed entries from the json file
      const json = fs.readFileSync(path.join(__dirname, '../listCenters.json'))
      return knex('centers').insert(JSON.parse(json));
    });
};
