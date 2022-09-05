require('dotenv').config();
require('express-async-errors');
const cors = require("cors")

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const formsRouter = require('./routes/Forms');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());
app.use(cors());

// routes

app.get('/', (req, res) => {
  res.send('<h1>Forms API</h1><a href="/api/">Forms API</a>');
});

app.use('/api/forms', formsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
