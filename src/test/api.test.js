const request = require('supertest');
const app = require('../src/app');

describe('POST /api/get-text', () => {
    it('should return extracted text from valid base64 image', async () => {
        const response = await request(app)
            .post('/api/get-text')
            .send({
                base64_image: 'valid_base64_image_string'
            });

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.result.text).toBeDefined();
    });

    it('should return an error for invalid base64 image', async () => {
        const response = await request(app)
            .post('/api/get-text')
            .send({
                base64_image: 'invalid_base64_string'
            });

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
        expect(response.body.error.message).toBe('Invalid base64_image.');
    });
});
