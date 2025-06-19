require("dotenv").config();
c
module.exports = async(payload) => {
  return  await jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
};