const db = require('../data/dbConfig.js') //imports dbConfig file rather than having to import all the knex imports

module.exports = {
    find,
   findById,
    update,
    remove, 
    add,
    connect
}

function find() {
   
   return db('posts')
}

function connect(id) {
   
   return db('posts').where({user_id: id})
}

function findById(id) {
   return db('posts').where({id: id})
}

function update(id, changes) {
   return db('posts').where({id: id}).update(changes)
}

function update(id, changes) {
   return db('posts').where({id: id}).update(changes)
}

function remove(id) {
   return db('posts').where({id: id}).del()
}

function add(body) {
   return db('posts').insert(body)
}