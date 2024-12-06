const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const app = express();

require('dotenv').config();

// Nastavenie pre ukladanie obrázkov
const upload = multer({ dest: 'uploads/' });

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.php'));
});

app.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'edit.php'));
});

// Ukladanie obrázkov na server
app.post('/upload', upload.single('image'), (req, res) => {
    const tmpPath = req.file.path;
    const targetPath = path.join(__dirname, 'uploads', req.file.originalname);
    fs.rename(tmpPath, targetPath, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Uloženie upraveného obrázka
app.post('/save-image', upload.single('image'), (req, res) => {
    const tmpPath = req.file.path;
    const targetPath = path.join(__dirname, 'uploads', req.file.originalname);
    fs.rename(tmpPath, targetPath, (err) => {
        if (err) throw err;
        res.json({ message: 'Image saved successfully!' });
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
