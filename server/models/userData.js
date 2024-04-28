const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  },
  monthlyIncome: {
    type: Number,
    required: true
  },
  existingDebts: {
    type: Number,
    required: true
  },
  personalExpenses: {
    type: Number,
    required: true
  },
  creditScore: {
    type: Number,
    required: true
  },
  investmentAmount: {
    type: Number,
    required: true
  },
  loanAmount: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

UserDataSchema.index({ userId: 'ascending' });

module.exports = mongoose.model('userData', UserDataSchema);
