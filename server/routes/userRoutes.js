const express = require('express');
const router = express.Router();
const { getUserData, postUserData } = require('../controllers/userController');
const {
  handleMultipleLoanCalculations
} = require('../controllers/loanController');

router.get('/', getUserData);
router.post('/', postUserData);
router.post('/calculate-loans/:userId', handleMultipleLoanCalculations);

module.exports = router;
