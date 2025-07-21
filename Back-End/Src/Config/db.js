import mongoose from 'mongoose';

export const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("There is something wrong", error);
  }
};
