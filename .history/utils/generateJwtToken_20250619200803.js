require("dotenv").config();

module.exports = async(payload) => {
  return  await jwt.sign(
      { id: payload._, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
};