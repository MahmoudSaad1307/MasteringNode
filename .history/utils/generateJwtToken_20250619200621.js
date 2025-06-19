module.exports = (user) => {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };
  return payload;
};