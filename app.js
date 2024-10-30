const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// Initialize the app
const app = express();

const Router = require('./routes/api');
const connectDB = require('./config/database');
const { connect } = require('http2');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to DB
connectDB();

// Use Router
app.use('/api', Router);

// Define Static folder
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;