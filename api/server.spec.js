
//importing supertest from dependencies
const supertest = require('supertest');
//importing server.hs
const server = require('./server.js');

describe('server connection', () => {
    it('should return status 200', () => {
        return supertest(server)
        .get('/')
        .expect(200)
    })

    //testing actual content that is returned
    it('should return {api: working}', async () => {
        await supertest(server)
        .get('/')
        .then(res => {
            expect(res.body).toEqual({message: 'server is working'})
        })
        
    })
})