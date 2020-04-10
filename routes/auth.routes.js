const express = require('express');
const router = express.Router();
const config = require('config');

const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator'); //validation for POST
const bcrypt = require('bcryptjs');

const auth = require('../middleware/auth');

const User = require('../models/user.models');

/* 
GET api/auth
test route
public
 */

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    return res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/* 
POST api/auth
authenticate user and get token
public

check() - will check in name field whne pushing to db. If empty message will pops. tis need also .not().isEmpty()
 */

router.post(
  '/',
  [
    // validation
    check('email', 'Add valid email').isEmail(),
    check('password', 'Password requierd').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // json({ errors: errors.array() }) this checks errors from validation
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // chek if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      // return jsonwebtoken

      const payload = {
        user: {
          id: user._id,
        },
      };
      console.log('payload', payload);

      //sends the token with expire timestamp/ connect it o user ID
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
