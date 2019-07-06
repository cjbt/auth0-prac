const express = require('express');

const db = require('./authModel');

const router = express.Router();

router.post('/register', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  db.findBy({ name }).then(exists => {
    if (exists) {
      return res.status(200).json(exists);
    } else {
      return db
        .register(req.body)
        .then(() => {
          return db.findBy({ name }).then(user => {
            return res.status(201).json(user);
          });
        })
        .catch(({ message }) => {
          return res.status(500).json({ message });
        });
    }
  });
});

module.exports = router;
