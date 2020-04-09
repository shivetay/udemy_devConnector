const express = require('express');
const router = express.Router();

/* 
GET api/user
test route
poublic
 */

router.get('/', (req, res) => res.send('User route'));

module.exports = router;
