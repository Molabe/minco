const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');
const path = require('path');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/auth', authRoutes);
app.use('/upload', uploadRoutes);
app.use('/order', orderRoutes);
app.use('/admin', adminRoutes);

// Serve static HTML pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../views/index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '../views/login.html')));
app.get('/upload', (req, res) => res.sendFile(path.join(__dirname, '../views/upload.html')));
app.get('/order-summary', (req, res) => res.sendFile(path.join(__dirname, '../views/order-summary.html')));
app.get('/admin-panel', (req, res) => res.sendFile(path.join(__dirname, '../views/admin-panel.html')));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
