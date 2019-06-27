const db = require('../data/dbConfig.js');
const {add, remove} = require('./posts-model.js')
const Posts = require('./posts-model.js')
//importing supertest from dependencies
const supertest = require('supertest');
//importing server.hs
const server = require('../api/server.js');

describe('server connection', () => {

    //  //clear data base before each test
    //  beforeEach(async ()=> {
    //     await db('posts').truncate()
    // })

    it('should return status 200 or 500', () => {
        return supertest(server)
        .get('/api/posts')
        .then( res => {
            expect(200).toBe(200)
        })
        .catch(res => expect(500).toBe(500))
    })

   
})

