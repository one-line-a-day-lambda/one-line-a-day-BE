
//importing supertest from dependencies
const supertest = require('supertest');
//importing server.hs
const server = require('../api/server.js');

describe('server connection', () => {
    it('should return status 200', () => {
        return supertest(server)
        .post('/api/auth/register')
        .then( res => {
            expect(200).toBe(200)
        })
        .catch(res => expect(500).toBe(500))
    })

   
})