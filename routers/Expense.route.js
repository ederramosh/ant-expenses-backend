const express = require('express');

const router = express.Router();

const { 
    submitExpense,
    getAllExpenses,
    updateExpense,
    removeExpense } = require('../controllers');

router.post('/', submitExpense);
router.get('/getAll', getAllExpenses);
router.put('/:id', updateExpense);
router.delete('/:id', removeExpense);

module.exports = router;