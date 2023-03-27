const todosModel = require("../model/todosModel");

module.exports.fetchTodos = async (request, response) => {
  try {
    const todos = await todosModel.find({});
    response.status(200).send(todos);
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};
module.exports.fetchTodoById = async (request, response) => {
  try {
    const { id } = request.params;
    const todo = await todosModel.findById(id);
    response.status(200).send(todo);
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};
module.exports.createTodo = async (request, response) => {
  try {
    const newTodo = request.body;
    const result = await todosModel.create(newTodo);
    response.status(201).send(result);
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};
module.exports.deleteTodo = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await todosModel.findByIdAndDelete(id);
    response.status(200).send(result);
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};
module.exports.updateTodo = async (request, response) => {
  try {
    const { id } = request.params;
    const newTodo = request.body;
    const result = await todosModel.findByIdAndUpdate(id, newTodo);
    response.status(200).send(result);
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};
