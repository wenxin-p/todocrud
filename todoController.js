const Todo = require("../todoModel.js");

//Function to create a todo.
const createTodo = async (req, res) => {
  const { title, category, user_id, status } = req.body;

  try {
    const newTodo = new Todo({
      title,
      category,
      user_id,
      status,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};

//Function to retrieve a single todo.
const getOneTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    console.error("Error retrieving todo:", error);
    res.status(500).json({ message: "Error retrieving todo" });
  }
};

// Function to retrieve all todos.
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    // Send the todos as the response
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error retrieving todos:", error);
    res.status(500).json({ message: "Error retrieving todos" });
  }
};

// Function to update todos.
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, category } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { title, category },
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    console.error("Error updating todo:");
    res.status(500).json({ message: "Error updating todo" });
  }
};

//Function to update status of completion.
const updateTodoStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(id, { status }, { new: true });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    // todo.status = status;
    // await todo.save(); // Save the updated todo
    res.status(200).json(todo);
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Error updating status" });
  }
};

//Function to delete a todo.
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully!" });
  } catch (error) {
    console.error("Error deleting todo", error);
    res.status(500).json({ message: "Error deleting todo" });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getOneTodo,
  deleteTodo,
  updateTodo,
  updateTodoStatus,
};
