const express = require('express');
const router = express.Router();

/* 
GET api/profile
test route
poublic
 */

router.get('/', (req, res) => res.send('profile route'));

module.exports = router;
