// models/website.js
import mongoose from 'mongoose';

const websiteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  domain: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
});

module.exports=mongoose.models.Website || mongoose.model("Website",websiteSchema)
