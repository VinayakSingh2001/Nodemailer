const signup = (req, res) => {
  return res.status(201).json("signup successfully");
};

const getbill = (req, res) => {
  return res.status(201).json("getbill successfully");
};

module.exports = {
  signup,
  getbill,
};
