
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_id: 1, post: 'this is a post'},

        {user_id: 1, post: 'this is a post too'},
       
      ]);
    });
};
