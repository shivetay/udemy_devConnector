const express = require('express');
const connectDB = require('./config/db');

const app = express();

/* connect db */
connectDB();

/* init middleware */
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

/* Define routes */

app.use('/api/users', require('./routes/users.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/profile', require('./routes/profiles.routes'));
app.use('/api/post', require('./routes/posts.routes'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on ${PORT} ^_^`));
