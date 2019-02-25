const request = require('supertest');
const app = require('../../..');
const { getRequestUrlInTests } = require('../../../services/formatter.js');

describe('Routes retrieval', () => {
  test('It should answer with a list of API urls', () => request(app)
    .get('/api')
    .expect(200)
    .expect((res) => {
      expect(res.body).toEqual({
        fishtanks: `${getRequestUrlInTests(res)}/api/fishtanks`,
      });
    }));
});
