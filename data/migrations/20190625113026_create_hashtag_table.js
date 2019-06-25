
exports.up = function(knex, Promise) {
    return knex.schema.createTable('hashtags', tbl => {
  
      //primary key column
      tbl.increments()
  
      //username column
      tbl
      .string('hashtag', 128)
      .notNullable()
      
       //foreign key
      tbl
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  
    })
  
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('hashtags');
  };
  