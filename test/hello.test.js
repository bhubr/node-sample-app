const request = require('supertest');
const assert = require('assert');

const app = require('../app');

describe("test home endpoint", () => {
  it("receives 'Hello World'", async () => {
    const res = await request(app)
      .get('/api/hello')
      .expect(200);
    assert.deepEqual(res.body, { message: 'Hello World!' });
  });
})