const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (_req, res, _next) {
  res.send('Products page ready');
});

module.exports = router;
