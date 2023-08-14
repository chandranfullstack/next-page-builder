// models/page.js
import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  website: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Website', // Reference to the Website model
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
});

module.exports=mongoose.models.Page || mongoose.model("Page",pageSchema)
