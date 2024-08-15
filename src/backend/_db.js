const dbConnected = { connection: false };

export const dbConnect = async () => {
  if (dbConnected.connection) {
    return;
  }

  try {
    // await mongoose.connect(process.env.MONGODB_URL);
    // console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
  dbConnected.connection = true;
};

export default dbConnect;
