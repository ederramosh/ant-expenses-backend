const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    times: {
        type: Number,
        require: true,
    }
})

mongoose.model('Expense', ExpenseSchema, 'collectionExpense');