const express = require('express');
const router = express.Router();

// @route   Get api/users
// @desc    Register user
// @acceess Public
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('User route');
});


module.exports = router;