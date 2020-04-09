const express = require('express');
const router = express.Router();

/* 
GET api/post
test route
poublic
 */

router.get('/', (req, res) => res.send('posts route'));

module.exports = router;
