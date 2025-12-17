import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  techStack: [String]
});

export default mongoose.models.Project ||
  mongoose.model("Project", schema);
