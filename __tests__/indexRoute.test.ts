import request from 'supertest';
import express, { Application } from 'express';

const mockUsers = Array.from({ length: 100}, (_, index) => ({
  id: index + 1,
  username: `User${index + 1}`,
  password: 'Test',
}));

jest.mock('../src/config/database', () => ({
  getConnection: jest.fn(),
  disconnect: jest.fn(),
  client: {
    connect: jest.fn(),
    disconnect: jest.fn(),
    query: jest.fn(async () => ({
      rows: mockUsers,
    })),
  },
}));

const app: Application = express();
app.use('/', (req, res) => {
  res.json(mockUsers)
});

describe('GET /', () => {
  beforeAll(async () => {
    const { getConnection } = require('../src/config/database');
    await getConnection();
  });

  afterAll(async () => {
    const { disconnect } = require('../src/config/database');
    await disconnect(); 
  });

  it('should return json with id, username, and password', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(mockUsers.length);
    expect(response.body).toMatchObject(mockUsers);
  });
});
