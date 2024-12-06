const path = require('path');
const fs = require('fs');

const handleUpload = (req, res) => {
    const file = req.files?.magnetImage;
    if (!file) return res.status(400).json({ message: 'No file uploaded' });

    const uploadPath = path.join(__dirname, '../../uploads', file.name);

    file.mv(uploadPath, (err) => {
        if (err) return res.status(500).json({ message: 'File upload failed', err });
        res.status(200).json({ message: 'File uploaded successfully', filePath: uploadPath });
    });
};

module.exports = { handleUpload };
