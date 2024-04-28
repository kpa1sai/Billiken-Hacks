const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

const PORT = 5000;
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // allow any origin
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());
// DB Config and Connection setup
mongoose
  .connect('mongodb://admin:root@0.0.0.0:5151/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/user', userRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
