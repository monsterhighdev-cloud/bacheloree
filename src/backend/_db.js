import mongoose from "mongoose";

const dbConnected = { connection: false };

export const dbConnect = async () => {
  if (dbConnected.connection) {
    return;
  }

  await mongoose.connect(process.env.MONGODB_URL);
  // console.log("DB Connected");

  dbConnected.connection = true;
};

export default dbConnect;
