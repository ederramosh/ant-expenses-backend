const mongoose = require("mongoose");

const Expense = mongoose.model("Expense");

const submitExpense = async (req, res) => {
  try {
    const expense = new Expense(req.body);

    const answer = await expense.save();

    return res.status(201).json({
      msg: "Expenses submitted",
      data: answer,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      data: e.message,
    });
  }
};

const getAllExpenses = async (req, res) => {
  try {
    const answer = await Expense.find();

    if (!answer.length)
      return res.status(404).json({
        mensaje: "Error",
        data: "Empty Collection",
      });

    return res.status(200).json({
      msg: "Expenses delivered",
      data: answer,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      data: e.message,
    });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, price, times } = req.body;

    const myExpense = {
      name,
      category,
      price,
      times,
    };

    const answer = await Expense.findByIdAndUpdate(
      id,
      { $set: myExpense },
      { new: true }
    );
    return res.status(200).json({
      msg: "Record updated",
      data: answer,
    });
  } catch (e) {
    return res.status(400).json({
        msg: 'Error',
        data: e.message,
    })
  }
};

const removeExpense = async (req, res) => {
    try {
        const { id } = req.params;

        const expenseFounded = await Expense.findById(id);

        if(!expenseFounded)
            return res.status(404).json({
                msg: 'Error',
                data: 'Expense not founded'
            });

        const answer = await Expense.findByIdAndDelete(id);
        return res.status(200).json({
            msg: "Expense Removed",
            data: answer,
        })
    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            data: e.message,
        })
    }

}

module.exports = {
  submitExpense,
  getAllExpenses,
  updateExpense,
  removeExpense,
};
