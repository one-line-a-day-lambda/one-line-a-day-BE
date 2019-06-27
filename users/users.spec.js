const db = require('../data/dbConfig.js');
const {add, remove} = require('./users-model.js')
const supertest = require('supertest');
const server = require('../api/server.js');
require('jest-dom/extend-expect')

describe('INSERT of of users/', () => {
    //clear data base before each test
    beforeEach(async ()=> {
        await db('users').truncate()
    })

     //checks length
     it('should add user', async () => {
        await add({username: 'Georgey', password: 'pass'})
        await add({username: 'lukey', password: 'pass'})
        const users = await db('users')
        expect(users).toHaveLength(2)
    })

     


})



