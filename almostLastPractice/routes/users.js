const express = require('express');
const router = express.Router();
const DB = require('../modules/database');
const db = new DB();

/* GET users listing. */
router.get('/', async (_req, res, _next) => {
  const users = await db.read();
  res.render('users', { users: users });
});

module.exports = router;
