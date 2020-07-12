const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

/* connect db */
connectDB();

/* init middleware */
app.use(
  cors({ origin: 'http://localhost:3000', methods: 'GET, POST, PUT, DELETE' })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '/client/build')));

// app.get('/', (req, res) => res.send('API Running'));

/* Define routes */

app.use('/api/users', require('./routes/users.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/profile', require('./routes/profiles.routes'));
app.use('/api/post', require('./routes/posts.routes'));

//serve static assets in prod

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('/client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on ${PORT} ^_^`));
