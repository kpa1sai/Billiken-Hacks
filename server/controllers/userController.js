const UserData = require('../models/userData');
const LoanCalculation = require('../models/loanCalculation');

// Fetch User Data
exports.getUserData = async (req, res) => {
  try {
    const data = await UserData.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
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
exports.handleMultipleLoanCalculations = async (req, res) => {
  const { userId, loanAmount, annualRate, loanDurations } = req.body;

  const calculations = loanDurations.map((duration) => {
    const monthlyRate = annualRate / 12 / 100;
    const totalPayments = duration * 12;
    const monthlyPayment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -totalPayments));
    const totalPaid = monthlyPayment * totalPayments;
    const totalInterestPaid = totalPaid - loanAmount;

    return {
      durationYears: duration,
      monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
      totalInterestPaid: parseFloat(totalInterestPaid.toFixed(2)),
      totalPaid: parseFloat(totalPaid.toFixed(2))
    };
  });

  try {
    // Save or update calculation in the database
    const existingRecord = await LoanCalculation.findOne({ userId: userId });

    if (existingRecord) {
      existingRecord.loanAmount = loanAmount;
      existingRecord.annualRate = annualRate;
      existingRecord.loanDurations = loanDurations;
      existingRecord.calculations = calculations;
      existingRecord.updatedAt = new Date();
      await existingRecord.save();
    } else {
      const newCalculation = new LoanCalculation({
        userId,
        loanAmount,
        annualRate,
        loanDurations,
        calculations
      });
      await newCalculation.save();
    }

    res.json({
      status: 'success',
      message: 'Calculations saved',
      calculations
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
