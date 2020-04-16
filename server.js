const express = require('express');
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

app.get('/', (req, res) => res.send('API Running'));

/* Define routes */

app.use('/api/users', require('./routes/users.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/profile', require('./routes/profiles.routes'));
app.use('/api/post', require('./routes/posts.routes'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on ${PORT} ^_^`));
