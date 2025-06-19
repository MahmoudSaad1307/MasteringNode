require("dotenv").config();

module.exports = async(payload) => {
  return  await jwt.sign(
      { id: payload._id, email: p.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
};