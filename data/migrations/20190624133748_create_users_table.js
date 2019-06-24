
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', users => {
  
      //primary key column
      users.increments()
  
      //username column
      users
      .string('username', 128)
      .notNullable()
      .unique()
 
  
      //password column
      users
      .string('password', 128)
      .notNullable()
    })
  
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.destroyTableIfExists('users');
  };
  