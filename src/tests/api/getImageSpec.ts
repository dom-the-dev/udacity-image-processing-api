import supertest from "supertest";
import app from '../../app';

const request = supertest(app);

describe('GET /api/images', () => {

    it('it should response original image', async (done: DoneFn) => {
        const response = await request.get('/api/image?filename=argentina')
        expect(response.statusCode).toBe(200)
        done()
    })


    it('it should response an thumbnail', async (done: DoneFn) => {
        const response = await request.get('/api/image?filename=argentina&width=200&height=200')
        expect(response.statusCode).toBe(200)
        done()
    })


    it('it should response with 404', async (done: DoneFn) => {
        const response = await request.get('/api/image')
        expect(response.statusCode).toBe(404)
        done()
    })


})