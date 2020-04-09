const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator'); //validation for post

/* 
POST api/user
register user
poublic

check() - will check in name field whne pushing to db. If empty message will pops. tis need also .not().isEmpty()
 */

router.post(
  '/',
  [
    // validation
    check('name', 'Name is requierd').not().isEmpty(),
    check('email', 'Add valid email').isEmail(),
    check('password', 'Password requier min 6 or more characters').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('User route');
  }
);

module.exports = router;
