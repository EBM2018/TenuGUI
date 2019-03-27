const request = require('superagent');
const { formatUser } = require('./formatter.js');

const BASE_URL = 'https://teamy.ebm.nymous.io/api/';

const teamyUsers = [{
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc',
  name: 'BDH',
  id: 50,
}, {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVsZXZlQ2libGUifQ.nXJYbTIvyYaT_Xh6eO6fU0fIsjGuXNv31T4KQB9dIog',
  name: 'Hamza',
  id: 10,
  shoalId: 5,
}, {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVsZXZlUmFuZG9tIn0.RhXPI2fUIfjgFQR4JIxeM9ElQsRVagT_XgonQbd5uvk',
  name: 'Batou',
  id: 20,
  shoalId: 99999,
}];

module.exports = {
  getUser: async (token) => {
    for (let i = 0; i < teamyUsers.length; i += 1) {
      const user = teamyUsers[i];
      if (user.token === token) return user;
    }
    return null;
  },
  getUserToken: async (id) => {
    for (let i = 0; i < teamyUsers.length; i += 1) {
      const user = teamyUsers[i];
      if (user.id === id) return user.token;
    }
    return null;
  },
  getUsers: async () => {
    const users = await request.get(`${BASE_URL}/users`).then(res => res.body);
    return users.map(formatUser);
  },
  isValidShoal: async () => true,
  isUserPartOfShoal: async (userId, shoalId) => {
    for (let i = 0; i < teamyUsers.length; i += 1) {
      if (teamyUsers[i].id === userId) {
        return teamyUsers[i].shoalId === shoalId;
      }
    }
    return false;
  },
};
