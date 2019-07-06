const express = require('express');

const db = require('./usersModel');

const router = express.Router();

router.get('/', (req, res) => {
  db.getAll()
    .then(users => {
      return res.status(200).json(users);
    })
    .catch(({ message }) => {
      return res.status(500).json({ message });
    });
});

module.exports = router;
