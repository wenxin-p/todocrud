const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    user_id: String,
    status: String,
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
