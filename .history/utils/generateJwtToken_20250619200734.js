require("../.en").config();

module.exports = async(payload) => {
  return  await jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
};