const connection = require('../../src/database/connection')
const request = require('supertest')
const app = require('../../src/app')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.migrate.rollback()
        await connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .set('Authorization', '5c08e574')
            .send({
                name: 'APAD',
                email: 'rafaels.dias@me.com',
                whatsapp: '1111111111',
                city: "São Luis",
                uf: "MA"
            })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
});
