import { connect, disconnect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
    throw new Error('Cannot connect to DB');
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.log(error);
    throw new Error('Cannot disconnect from DB');
  }
}

export { connectToDatabase, disconnectFromDatabase };
