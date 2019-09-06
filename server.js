const express = require("express");
const connectDB = require('./config/db');
const app = express();


// Connect Database
connectDB();

// Init Middleware for post request
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`API Running`);
});

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

// Test of Post
app.post('/', (req, res) => {
  try {

    console.log('Recived POST request...');
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
