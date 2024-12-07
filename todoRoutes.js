const todoController = require("./todoController.js");
const router = require("express").Router();

router.post("/", todoController.createTodo);
router.get("/", todoController.getAllTodos);
router.get("/:id", todoController.getOneTodo);
router.delete("/:id", todoController.deleteTodo);
router.put("/:id", todoController.updateTodo);
router.put("/status/:id", todoController.updateTodoStatus);

module.exports = router;
