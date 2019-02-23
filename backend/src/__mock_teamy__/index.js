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

module.exports = {
  getUser: async (token) => {
    for (let i = 0; i < teamyUsers.length; i += 1) {
      const user = teamyUsers[i];
      if (user.token === token) return user;
    }
    return null;
  },
  isValidShoal: async () => true,
  isUserPartOfShoal: async () => true,
};
