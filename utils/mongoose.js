const mongoose = require('mongoose')

const MONGODB_URI = process.env['MONGO_DB']
await mongoose.connect(MONGODB_URI)


export async function connectToDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('base de datos conectada')
  } catch (error) {
    console.log(error);
  }
}

