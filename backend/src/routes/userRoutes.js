// User routes
const express = require('express');
const router = express.Router();
const { getUsers, getUserById } = require('../controllers/userController');

// GET /api/users
router.get('/', getUsers);

// GET /api/users/:id
router.get('/:id', getUserById);

// POST /api/users
router.post('/', (req, res) => {
  res.status(201).json({ message: 'User created' });
});

// PUT /api/users/:id
router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'User updated' });
});

// DELETE /api/users/:id
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'User deleted' });
});

module.exports = router;
