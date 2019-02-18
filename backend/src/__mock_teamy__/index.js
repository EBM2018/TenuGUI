const teamyUsers = [{
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc',
  id: 0,
}, {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVsZXZlQ2libGUifQ.nXJYbTIvyYaT_Xh6eO6fU0fIsjGuXNv31T4KQB9dIog',
  id: 1,
  shoalId: 0,
}, {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVsZXZlUmFuZG9tIn0.RhXPI2fUIfjgFQR4JIxeM9ElQsRVagT_XgonQbd5uvk',
  id: 2,
  shoalId: 99999,
}];

const getUser = (token) => {
  for (let i = 0; i < teamyUsers.length; i += 1) {
    const user = teamyUsers[i];
    if (user.token === token) return user;
  }
  return null;
};

module.exports = {
  isAuthenticated: async () => true, // TODO: Harass Teamy
  getUserId: async (token) => {
    const user = getUser(token);
    if (user !== null) return user.id;
    return null;
  },
  getShoalId: async (token) => {
    const user = getUser(token);
    if (user !== null) return user.shoalId;
    return null;
  },
  isValidShoal: async () => true,
};
