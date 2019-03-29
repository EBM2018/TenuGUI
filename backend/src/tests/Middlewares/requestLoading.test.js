const rewire = require('rewire');

const requestLoading = rewire('../../middlewares/requestLoading');
// eslint-disable-next-line no-underscore-dangle
const loadRequestWith = requestLoading.__get__('loadRequestWith');

describe('Request loading', () => {
  test('It should correctly load a request', () => {
    const req = {
      locals: {},
    };
    loadRequestWith(req, 'foo', 'bar');
    expect(req.locals).toEqual({ foo: 'bar' });
  });

  test('It should correctly load a request without a locals sub-object', () => {
    const req = {};
    loadRequestWith(req, 'foo', 'bar');
    expect(req.locals).toEqual({ foo: 'bar' });
  });
});
