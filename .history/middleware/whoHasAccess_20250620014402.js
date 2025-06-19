const AppError = require("../utils/appError");

module.exports = (...roles) => {
  console.log("roles", roles);

  return (req, res, next) => {
    if (!roles.includes(req.currentUser.role)) {
      throw new AppError("You don't have permission to access this route", 403);
    }
    console.log("whoHasAccess", req.currentUser.role);
    next();
  };
  // return
};
