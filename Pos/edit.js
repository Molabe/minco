// edit.js

let cropper;
let currentImage;
const uploadInput = document.getElementById('upload-input');
const imageGallery = document.getElementById('image-gallery');
const editor = document.getElementById('editor');
const editorImageContainer = document.getElementById('editor-image-container');
const saveButton = document.getElementById('save-btn');
const closeEditorButton = document.getElementById('close-editor-btn');

// Funkcia na nahranie viacerých obrázkov
uploadInput.addEventListener('change', function (e) {
    const files = e.target.files;

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imgElement = new Image();
            imgElement.src = event.target.result;
            imgElement.alt = 'Nahral sa obrázok';
            imgElement.setAttribute('data-original', event.target.result); // Pôvodný obrázok
            imgElement.classList.add('gallery-image');

            const wrapper = document.createElement('div');
            wrapper.classList.add('image-wrapper');

            // Pridanie tlačidla na odstránenie
            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-btn');
            removeButton.textContent = 'Odstrániť';
            removeButton.addEventListener('click', function () {
                wrapper.remove(); // Odstráni obrázok z galérie
            });

            // Po kliknutí na obrázok otvorí editor
            imgElement.addEventListener('click', function () {
                openEditor(imgElement);
            });

            wrapper.appendChild(imgElement);
            wrapper.appendChild(removeButton);
            imageGallery.appendChild(wrapper);
        };
        reader.readAsDataURL(file);
    }
});

// Funkcia na otvorenie editora
function openEditor(image) {
    currentImage = image;
    editorImageContainer.innerHTML = ''; // Vymaže starý obsah
    const imgClone = new Image();
    imgClone.src = image.src;
    imgClone.alt = 'Upravovaný obrázok';
    imgClone.id = 'editor-image';

    editorImageContainer.appendChild(imgClone);
    editor.style.display = 'block';

    cropper = new Cropper(imgClone, {
        aspectRatio: NaN,
        viewMode: 2,
    });
}

// Ovládacie prvky pre editor
document.getElementById('rotate-btn').addEventListener('click', function () {
    if (cropper) cropper.rotate(90);
});

document.getElementById('zoom-in-btn').addEventListener('click', function () {
    if (cropper) cropper.zoom(0.1);
});

document.getElementById('zoom-out-btn').addEventListener('click', function () {
    if (cropper) cropper.zoom(-0.1);
});

document.getElementById('crop-btn').addEventListener('click', function () {
    if (cropper) {
        const canvas = cropper.getCroppedCanvas();
        const croppedData = canvas.toDataURL();
        currentImage.src = croppedData; // Aktualizuje zdroj pôvodného obrázka
    }
});

saveButton.addEventListener('click', function () {
    if (cropper) {
        const canvas = cropper.getCroppedCanvas();
        const croppedData = canvas.toDataURL();

        // Aktualizuje galériu
        currentImage.src = croppedData;

        // Zatvorí editor
        editor.style.display = 'none';
        cropper.destroy();
        cropper = null;
    }
});

closeEditorButton.addEventListener('click', function () {
    editor.style.display = 'none';
    if (cropper) {
        cropper.destroy();
        cropper = null;
    }
});
