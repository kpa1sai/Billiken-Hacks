const LoanCalculation = require('../models/loanCalculation');
const userData = require('../models/userData');

const getMonthlyAmount = async (userId) => {
  try {
    const existingUser = await userData.findById(userId);
    const monthlyAmount = existingUser.investmentAmount;
    return monthlyAmount;
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};

exports.handleMultipleLoanCalculations = async (req, res) => {
  const { userId, loanAmount, annualRate, loanDurations } = req.body;

  const monthlyAmount = await getMonthlyAmount(userId);
  const calculations = loanDurations.map((duration) => {
    const monthlyRate = annualRate / 12 / 100;
    const totalPayments = duration * 12;
    const monthlyPayment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -totalPayments));
    const totalPaid = monthlyPayment * totalPayments;
    const totalInterestPaid = totalPaid - loanAmount;
    console.log(monthlyAmount);
    console.log(monthlyPayment);
    const remainder = parseFloat(monthlyAmount) - parseFloat(monthlyPayment);

    return {
      annualRate: annualRate,
      durationYears: duration,
      monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
      totalInterestPaid: parseFloat(totalInterestPaid.toFixed(2)),
      totalPaid: parseFloat(totalPaid.toFixed(2)),
      investment: {
        remainder: parseFloat(remainder.toFixed(2))
      }
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
      existingRecord.calculations;
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
