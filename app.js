const express = require('express');
const connectDB = require('./db/connect');

require('dotenv').config();
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/notFound');
// middle weare

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use(notFound);
const port = 3000;

const start = async (url) => {
  try {
    await connectDB(url);
    app.listen(port, () => console.log(`Server is listing on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start(process.env.MONGO_URI);
