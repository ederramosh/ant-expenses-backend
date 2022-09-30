const {
  submitExpense,
  getAllExpenses,
  updateExpense,
  removeExpense,
} = require("./Expense.controller");

const { createUser, removeUser } = require("./User.controller");

module.exports = {
  submitExpense,
  getAllExpenses,
  updateExpense,
  removeExpense,
  createUser,
  removeUser,
};
