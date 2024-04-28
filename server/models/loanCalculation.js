const mongoose = require('mongoose');
const UserData = require('./userData');

const loanCalculationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  loanAmount: {
    type: Number,
    required: true
  },
  annualRate: {
    type: Number,
    required: true
  },
  loanDurations: [Number],
  calculations: [
    {
      annualRate: Number,
      durationYears: Number,
      monthlyPayment: Number,
      totalInterestPaid: Number,
      totalPaid: Number,
      investment: {
        risk: {
          type: String,
          enum: ['High', 'Medium', 'Low'],
          default: 'Medium'
        },
        remainder: {
          type: Number,
          default: 0
        }
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});

module.exports = mongoose.model('LoanCalculation', loanCalculationSchema);
