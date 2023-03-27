const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const todosModel = Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  star: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("todos", todosModel);
