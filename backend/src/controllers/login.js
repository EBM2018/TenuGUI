module.exports = {
  post: async (req, res) => res.status(200).send({ token: req.locals.user.token }),
};
