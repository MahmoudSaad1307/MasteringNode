module.exports = (fn) => {
  return (req) => fn(req, res, next).catch((err) => next(err));
};
