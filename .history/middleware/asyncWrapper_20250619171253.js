module.exports = (fn) => {
    fn(req, res, next).catch(next);
}