import supertest from 'supertest';
import app from '../src/index';

const request = supertest(app);

describe('POST /send', () => {
  it('should print the request body', async () => {
    const requestBody = { key: 'value' };

    const response = await request.post('/send').send(requestBody);

    expect(response.status).toBe(200);
    expect(response.text).toBe('Request Body: value');
  });
});

describe('GET /user/:id', () => {
  it('should get user name by ID', async () => {
    const response = await request.get('/user/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, name: 'John' });
  });

  it('should return 404 for non-existing user ID', async () => {
    const response = await request.get('/user/99');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'User not found' });
  });
});

