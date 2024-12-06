import React, { useState } from 'react';

const Editor = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleCrop = () => {
        alert('Orezanie obrázka ešte nie je implementované.');
    };

    return (
        <div className="editor">
            <h2>Editor obrázkov</h2>
            <input type="file" onChange={handleImageUpload} />
            {image && (
                <div>
                    <img src={image} alt="Preview" style={{ maxWidth: '300px' }} />
                    <button onClick={handleCrop}>Orezať obrázok</button>
                </div>
            )}
        </div>
    );
};

export default Editor;
