const teamyUsers = [{
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc',
  name: 'BDH',
  id: 5,
}, {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVsZXZlQ2libGUifQ.nXJYbTIvyYaT_Xh6eO6fU0fIsjGuXNv31T4KQB9dIog',
  name: 'Hamza Oussaine',
  id: 1,
  shoalId: 1,
}, {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVsZXZlUmFuZG9tIn0.RhXPI2fUIfjgFQR4JIxeM9ElQsRVagT_XgonQbd5uvk',
  name: 'Baptiste Lalanne',
  id: 2,
  shoalId: 1,
}, {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVsZXZlQ2libGUyIn0.WSHds0DhoDLGNnPjL8VSNQjJEuA9by0NflqKgz5ZU1A',
  name: 'Ludovic Guillemin',
  id: 3,
  shoalId: 2,
}];

const teamyShoals = [{
  id: 1,
  name: 'EBM',
}, {
  id: 2,
  name: 'Maestro',
}];

module.exports = {
  getUser: async (token) => {
    for (let i = 0; i < teamyUsers.length; i += 1) {
      const user = teamyUsers[i];
      if (user.token === token) return user;
    }
    return null;
  },
  getUserToken: async (id) => { // sent after valid "authentication"
    for (let i = 0; i < teamyUsers.length; i += 1) {
      const user = teamyUsers[i];
      if (user.id === id) return user.token;
    }
    return null;
  },
  getUsers: async () => {
    const users = [];
    for (let i = 0; i < teamyUsers.length; i += 1) {
      const user = teamyUsers[i];
      const userKeys = Object.keys(user);
      const userInfo = {};
      for (let j = 0; j < userKeys.length; j += 1) {
        const userKey = userKeys[j];
        if (userKey !== 'token') userInfo[userKey] = user[userKey];
      }
      users.push(userInfo);
    }
    return users;
  },
  getShoals: async () => teamyShoals,
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
