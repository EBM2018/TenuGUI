const teamyUsers = [{
  token: 'prof',
  id: 0,
}, {
  token: 'eleveCible',
  id: 1,
  shoalId: 0,
}, {
  token: 'eleveRandom',
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
  getUserId: (token) => {
    const user = getUser(token);
    if (user !== null) return user.id;
    return null;
  },
  getShoalId: (token) => {
    const user = getUser(token);
    if (user !== null) return user.shoalId;
    return null;
  },
};
