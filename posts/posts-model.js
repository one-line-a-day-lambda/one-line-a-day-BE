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

async function update(id, changes) {
   await db('posts').where({id: id}).update(changes)
   return find()
}


async function remove(id) {
   await db('posts').where({id: id}).del()
   return find()
}

function add(body) {
   return db('posts').insert(body)
}