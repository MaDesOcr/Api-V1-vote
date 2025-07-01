const express = require('express');
const router = express.Router();
const membersController = require('../controllers/membersController');

router.get('/', membersController.listMembers);
router.post('/:id/vote', membersController.vote);

module.exports = router;
