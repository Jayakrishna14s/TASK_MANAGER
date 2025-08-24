import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  taskName: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, default: false },
  createdAt: { type: Date, default: () => new Date() },
});

export default mongoose.model("task", taskSchema);
