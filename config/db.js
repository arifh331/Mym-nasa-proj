const mongoose = require('mongoose');

const connectDB = async () => {
  // console.log(process.env.MONGO_URI)
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...Arifff');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;