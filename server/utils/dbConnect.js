import mongoose from 'mongoose';

async function dbConnect() {
  try {
    await mongoose.connect('mongodb+srv://chandran:rraavvii@cluster0.0zcd2.mongodb.net/Builder?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Throw the error to handle it in the calling code
  }
}

export default dbConnect;
