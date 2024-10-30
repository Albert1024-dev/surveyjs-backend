// routes/messages.js
const express = require('express');
const router = express.Router();
const { createMessage, respondToMessage, getMessages } = require('../../controllers/messageController');

// Route to create a new message
router.post('/', createMessage);

// Route to respond to a message
router.put('/:id/respond', respondToMessage);

// Route to get all messages
router.get('/', getMessages);

module.exports = router;
