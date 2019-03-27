/* eslint-disable no-underscore-dangle */
module.exports = {
  formatUser: user => ({
    id: user._id,
    name: `${user.name} ${user.last_name}`,
  }),
};
