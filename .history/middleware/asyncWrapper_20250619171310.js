const e = require("express");

module.exports = (fn) => {
    fn(req, res, next).catch(err=>next(err));
}