const express = require('express');
const router = express.Router();
const expenseRouter = require('./Expense.route');
const userRouter = require('./User.route');

router.use('/expense', expenseRouter);
router.use('/user', userRouter);

module.exports = router;