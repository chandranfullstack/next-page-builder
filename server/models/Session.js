// models/Session.js
import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  session: {
    cookie: {
      originalMaxAge: {
        type: Number,
        default: null,
      },
      expires: {
        type: Date,
        default: null,
      },
      secure: {
        type: Boolean,
        default: false,
      },
      httpOnly: {
        type: Boolean,
        default: true,
      },
      path: {
        type: String,
        default: '/',
      },
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, 
  },
});

export default mongoose.models.Session || mongoose.model('Session', sessionSchema);
