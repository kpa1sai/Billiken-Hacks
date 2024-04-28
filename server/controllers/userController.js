const UserData = require('../models/userData');

// Fetch User Data
exports.getUserData = async (req, res) => {
  try {
    const data = await UserData.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserDataById = async (userId) => {
  try {
    const userData = await UserData.findOne({ userId: userId }).exec();
    return userData;
  } catch (error) {
    throw new Error('Unable to retrieve user data');
  }
};
// Post User Data
exports.postUserData = async (req, res) => {
  const {
    userId,
    monthlyIncome,
    existingDebts,
    personalExpenses,
    creditScore,
    investmentAmount,
    loanAmount
  } = req.body;
  try {
    const newData = new UserData({
      userId,
      monthlyIncome,
      existingDebts,
      personalExpenses,
      creditScore,
      investmentAmount,
      loanAmount
    });
    await newData.save();
    res.status(201).send(newData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
