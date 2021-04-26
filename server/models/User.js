import mongoose from "mongoose";
const User = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a full name"],
    index: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    index: true,
  },
});
export default mongoose.model("users", User);
