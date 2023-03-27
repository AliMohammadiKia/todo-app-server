const express = require("express");
const {
  createTodo,
  deleteTodo,
  fetchTodoById,
  fetchTodos,
  updateTodo,
} = require("../controllers/todosController");

const router = express.Router();

router.get("/", fetchTodos);
router.get("/:id", fetchTodoById);
router.post("/create", createTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id", updateTodo);

module.exports = router;
