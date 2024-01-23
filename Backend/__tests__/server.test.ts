import supertest from 'supertest';
import app from '../src/index';

const request = supertest(app);

// get user by id
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

// post a new user
describe('POST /user', () => {
  it('should add a new user', async () => {
      const requestBody = { id: 9, name: 'test' };
      const response = await request.post('/user').send(requestBody);
      expect(response.status).toBe(200);
      const response2 = await request.get('/user/9');
      console.log(response2.body);
      expect(response2.status).toBe(200);
      expect(response2.body).toEqual({ id: 9, name: 'test' });
  });
  }
);

// delete a user
describe('DELETE /user/:id', () => {
  it('should delete a user', async () => {
      const response = await request.delete('/user/1');
      expect(response.status).toBe(200);
      const response2 = await request.get('/user/1');
      expect(response2.status).toBe(404);
      expect(response2.body).toEqual({ error: 'User not found' });
  });
  }
);


// get all users
describe('GET /users', () => {
  it('should get all users', async () => {
      const response = await request.get('/users');
      expect(response.status).toBe(200);
  });
  }
);

// update a user
describe('PUT /user/:id', () => {
  it('should update a user', async () => {
      const requestBody = { id: 1, name: 'test' };
      const response = await request.put('/user/1').send(requestBody);
      expect(response.status).toBe(200);
      const response2 = await request.get('/user/1');
      expect(response2.status).toBe(200);
      expect(response2.body).toEqual({ id: 1, name: 'test' });
  });
  }
);