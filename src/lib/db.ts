import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("✅ Database connected"));

    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "yamlak",
      serverSelectionTimeoutMS: 30000, // default 10000 (10s), here 30s
    });
  } catch (error: string | any) {
    console.error("MongoDB connection error:", error.message);
  }
};

export default connectDB;
