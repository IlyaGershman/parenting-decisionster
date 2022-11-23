import mongoose from "mongoose";

/* ActivitySchema will correspond to a collection in your MongoDB database. */
const ActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for the activity"],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  allowed: {
    type: String,
    enum: ["YES", "NO", "QUESTION"],
    default: "YES",
  },
  interfere: {
    type: String,
    enum: ["YES", "NO", "5_MIN"],
    default: "YES",
  },
});

export default mongoose.models.Activity ||
  mongoose.model("Activity", ActivitySchema);
