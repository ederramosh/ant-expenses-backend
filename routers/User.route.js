const express = require('express');

const router = express.Router();

const {
    createUser,
    removeUser,
} = require('../controllers');

router.post('/', createUser);
router.delete('/:id', removeUser);

module.exports = router;