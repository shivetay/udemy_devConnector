const express = require('express');
const router = express.Router();
const config = require('config');

const { check, validationResult } = require('express-validator'); //validation for post
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user.models');

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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // json({ errors: errors.array() }) this checks errors from validation
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // chek if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      // get gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // encrytp password
      /* hasing passowrd. this returns a promise from jsonbcrypt.salt */
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // return jsonwebtoken

      const payload = {
        user: {
          id: user._id,
        },
      };

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

      // res.send('User registered');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
