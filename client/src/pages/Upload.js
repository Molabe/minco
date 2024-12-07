import React, { useState, useRef } from "react";
import Cropper from "cropperjs";
import axios from "axios";

const Upload = () => {
    const [selectedImage, setSelectedImage] = useState(null); // Pre uloženie vybraného obrázka
    const [croppedImage, setCroppedImage] = useState(null); // Pre uloženie orezaného obrázka
    const imageRef = useRef(null); // Referencia na obrázok pre Cropper
    const cropperInstance = useRef(null); // Referencia na inštanciu Cropperu

    // Funkcia na spracovanie výberu obrázka
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result); // Nastavíme obrázok pre náhľad
            };
            reader.readAsDataURL(file);
        }
    };

    // Inicializácia Cropper.js
    const initializeCropper = () => {
        if (imageRef.current) {
            cropperInstance.current = new Cropper(imageRef.current, {
                aspectRatio: 1, // Pomer strán, môžeš zmeniť na požadovaný (napr. 16/9)
                viewMode: 1,
                background: false,
                zoomable: true,
            });
        }
    };

    // Uloženie orezaného obrázka
    const handleCrop = () => {
        if (cropperInstance.current) {
            const croppedCanvas = cropperInstance.current.getCroppedCanvas();
            const croppedImageURL = croppedCanvas.toDataURL("image/jpeg");

            // Odoslanie na server
            axios
                .post("/api/upload", { image: croppedImageURL })
                .then((response) => {
                    console.log("Obrázok úspešne odoslaný:", response.data);
                })
                .catch((error) => {
                    console.error("Chyba pri odosielaní obrázka:", error);
                });

            setCroppedImage(croppedImageURL);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Nahrajte a upravte svoj obrázok</h2>
            <div className="mt-4">
                {/* Nahrávanie obrázka */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="form-control mb-3"
                />

                {/* Náhľad nahratého obrázka a Cropper */}
                {selectedImage && (
                    <div className="text-center">
                        <img
                            src={selectedImage}
                            alt="Preview"
                            ref={imageRef}
                            className="img-fluid"
                            style={{ maxHeight: "400px", maxWidth: "100%" }}
                            onLoad={initializeCropper}
                        />
                        <button className="btn btn-primary mt-3" onClick={handleCrop}>
                            Orezať obrázok
                        </button>
                    </div>
                )}

                {/* Výsledný orezaný obrázok */}
                {croppedImage && (
                    <div className="mt-4 text-center">
                        <h4>Orezaný obrázok:</h4>
                        <img
                            src={croppedImage}
                            alt="Cropped"
                            className="img-fluid"
                            style={{ maxHeight: "400px", maxWidth: "100%" }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Upload;
