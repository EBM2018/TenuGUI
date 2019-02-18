module.exports = {
  isAuthenticated: (req, res, next) => {
    next();
  },
  isOwner: (req, res, next) => {
    next();
  },
  isPartOfShoal: (req, res, next) => {
    next();
  },
};
