import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    // unique: true,
  },
  slug: {       // used to manage whitespaces 
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);
