import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tours.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database connected successfully');
  } catch (error) {
    console.log('MongoDB database connection failed', error);
  }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api/tours', tourRoute); // Corrected path

// Testing route
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start the server and connect to the database
app.listen(port, () => {
  console.log('Server listening on port', port);
  connect();
});
