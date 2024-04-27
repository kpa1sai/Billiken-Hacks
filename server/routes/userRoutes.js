const express = require('express');
const router = express.Router();
const {
  getUserData,
  postUserData,
  handleMultipleLoanCalculations
} = require('../controllers/userController');

router.get('/', getUserData);
router.post('/', postUserData);
router.post('/calculate-loans', handleMultipleLoanCalculations);

module.exports = router;
