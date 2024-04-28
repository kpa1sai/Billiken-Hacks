const LoanCalculation = require('../models/loanCalculation');
const userData = require('../models/userData');

const getMonthlyAmount = async (userId) => {
  try {
    const existingUser = await userData.findById(userId);
    const monthlyAmount = existingUser.investmentAmount;
    const previousDebts = existingUser.existingDebts;
    const houseLoanLimit = existingUser.monthlyIncome * 0.28;
    const totalDebtLimit = existingUser.monthlyIncome * 0.36;
    return {
      monthlyAmount: monthlyAmount,
      previousDebts: previousDebts,
      houseLoanLimit: houseLoanLimit,
      totalDebtLimit: totalDebtLimit
    };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};

exports.handleMultipleLoanCalculations = async (req, res) => {
  const { userId, loanAmount, annualRate, loanDurations } = req.body;

  const { monthlyAmount, previousDebts, houseLoanLimit, totalDebtLimit } =
    await getMonthlyAmount(userId);
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
    const rule2836 = {
      name: 'Rule 28 36',
      suggestedLimit: parseFloat(houseLoanLimit).toFixed(2),
      suggestedTotalLoanLimit: parseFloat(totalDebtLimit).toFixed(2),
      cashAfterLoan: parseFloat(
        totalDebtLimit - monthlyPayment - previousDebts
      ).toFixed(2),
      exceedsLimit: houseLoanLimit - monthlyPayment < 0
    };

    return {
      annualRate: annualRate,
      durationYears: duration,
      monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
      totalInterestPaid: parseFloat(totalInterestPaid.toFixed(2)),
      totalPaid: parseFloat(totalPaid.toFixed(2)),
      investment: {
        remainder: parseFloat(remainder.toFixed(2))
      },
      rules: rule2836
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
