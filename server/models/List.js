import mongoose from "mongoose";

const TodoItem = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a full name"],
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const List = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a full name"],
    index: true,
  },
  todo: [{ type: TodoItem, index: true }],
});

export default mongoose.model("Lists", List);
