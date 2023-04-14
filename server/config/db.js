const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://127.0.0.1:27017/moodJournal"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Unable to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
