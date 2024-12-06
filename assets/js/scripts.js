let scale = 1;  // Počiatočná hodnota priblíženia
let rotation = 0;  // Počiatočná hodnota rotácie

// Funkcia na priblíženie obrázka
document.getElementById('zoomIn').addEventListener('click', function () {
    scale += 0.1;  // Zväčšiť mieru priblíženia
    applyTransformation();
});

// Funkcia na oddialenie obrázka
document.getElementById('zoomOut').addEventListener('click', function () {
    scale -= 0.1;  // Zmenšiť mieru priblíženia
    applyTransformation();
});

// Funkcia na otočenie obrázka doľava
document.getElementById('rotateLeft').addEventListener('click', function () {
    rotation -= 15;  // Otočiť obrázok o 15 stupňov doľava
    applyTransformation();
});

// Funkcia na otočenie obrázka doprava
document.getElementById('rotateRight').addEventListener('click', function () {
    rotation += 15;  // Otočiť obrázok o 15 stupňov doprava
    applyTransformation();
});

// Aplikovať priblíženie a rotáciu na obrázok
function applyTransformation() {
    const image = document.getElementById('imageToEdit');
    image.style.transform = `scale(${scale}) rotate(${rotation}deg)`;  // Aplikovať transformáciu na obrázok
}

// Automatické uloženie obrázka po každej úprave
function autoSaveImage() {
    const image = document.getElementById('imageToEdit');

    // Vytvorenie canvasu na spracovanie obrázka
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Nastavenie rozmerov canvasu
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    // Nastavenie transformácie pre priblíženie a rotáciu
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.scale(scale, scale);
    ctx.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);

    // Prevod canvasu na obrázok
    canvas.toBlob(function(blob) {
        const formData = new FormData();
        formData.append('image', blob, 'edited-image.jpg');

        // Odoslanie obrázka na server
        fetch('save-image.php', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(data => {
                console.log('Obrázok bol úspešne uložený!');
                alert('Obrázok bol úspešne uložený!');
            }).catch(error => {
            console.error('Chyba pri ukladaní obrázka:', error);
            alert('Chyba pri ukladaní obrázka.');
        });
    });
}

// Funkcia na nahrávanie obrázka na server
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Zabraňuje predvolenému spracovaniu formulára

    const form = new FormData(this);  // Získanie formulára

    // Debugging - Vytlačenie obsahu formulára
    for (let [key, value] of form.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Vytvorenie POST požiadavky na server
    fetch('/upload.php', {
        method: 'POST',
        body: form  // Odoslanie formulára na server
    })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);  // Debugging - Zobrazenie odpovede zo servera
            // Ak je odpoveď úspešná, zobrazí sa obrázok na stránke
            if (data.success) {
                alert('Obrázok bol úspešne nahraný!');
                // Dynamicky pridáme obrázok na stránku
                let imgElement = document.createElement('img');
                imgElement.src = data.filePath;  // Cesta k obrázku
                imgElement.width = 100;  // Nastavenie šírky obrázka
                document.querySelector('.uploaded-images').appendChild(imgElement);
            } else {
                alert('Chyba pri nahrávaní obrázka: ' + data.error);
            }
        })
        .catch(error => {
            console.error('Chyba:', error);
            alert('Došlo k chybe pri nahrávaní.');
        });
});
