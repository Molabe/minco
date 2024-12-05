// upload.js

const uploadInput = document.getElementById('upload-input');
const imagesContainer = document.getElementById('uploaded-images');

uploadInput.addEventListener('change', function (e) {
    const files = e.target.files;

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imgElement = document.createElement('img');
            imgElement.src = event.target.result;
            imgElement.classList.add('uploaded-image');
            imgElement.setAttribute('data-rotation', '0'); // Track rotation (initially 0)
            imgElement.setAttribute('data-scale', '1'); // Track scale (initially 1)
            imgElement.setAttribute('data-size', '515x515'); // Default size (515x515mm)

            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('image-wrapper');

            // Add Edit Button
            const editButton = document.createElement('button');
            editButton.classList.add('edit-button');
            editButton.textContent = 'Edit Image';
            editButton.addEventListener('click', () => toggleControls(imageWrapper));

            // Size selection dropdown
            const sizeSelect = document.createElement('select');
            sizeSelect.classList.add('size-select');
            const sizes = [
                { value: '515x515', text: 'Square 515x515mm - €2.50' },
                { value: '515x823', text: 'Square 515x823mm - €3.00' }
            ];

            sizes.forEach(size => {
                const option = document.createElement('option');
                option.value = size.value;
                option.textContent = size.text;
                sizeSelect.appendChild(option);
            });

            sizeSelect.addEventListener('change', function () {
                imgElement.setAttribute('data-size', sizeSelect.value); // Update size
                updateTransform(imgElement);
            });

            // Create controls div for zooming and rotating (hidden initially)
            const controls = document.createElement('div');
            controls.classList.add('controls');

            const zoomInButton = document.createElement('button');
            zoomInButton.textContent = 'Zoom In';
            zoomInButton.classList.add('zoom-in');
            zoomInButton.addEventListener('click', () => zoomIn(imgElement));

            const zoomOutButton = document.createElement('button');
            zoomOutButton.textContent = 'Zoom Out';
            zoomOutButton.classList.add('zoom-out');
            zoomOutButton.addEventListener('click', () => zoomOut(imgElement));

            const rotateLeftButton = document.createElement('button');
            rotateLeftButton.textContent = 'Rotate Left';
            rotateLeftButton.classList.add('rotate-left');
            rotateLeftButton.addEventListener('click', () => rotateLeft(imgElement));

            const rotateRightButton = document.createElement('button');
            rotateRightButton.textContent = 'Rotate Right';
            rotateRightButton.classList.add('rotate-right');
            rotateRightButton.addEventListener('click', () => rotateRight(imgElement));

            controls.appendChild(zoomInButton);
            controls.appendChild(zoomOutButton);
            controls.appendChild(rotateLeftButton);
            controls.appendChild(rotateRightButton);

            imageWrapper.appendChild(editButton);
            imageWrapper.appendChild(sizeSelect); // Append the size selector
            imageWrapper.appendChild(imgElement);
            imageWrapper.appendChild(controls);

            imagesContainer.appendChild(imageWrapper);
        };
        reader.readAsDataURL(file);
    }
});

function toggleControls(imageWrapper) {
    const controls = imageWrapper.querySelector('.controls');
    controls.style.display = controls.style.display === 'block' ? 'none' : 'block';
}

// Zoom In
function zoomIn(imgElement) {
    let scale = parseFloat(imgElement.getAttribute('data-scale'));
    scale = Math.min(scale + 0.1, 2); // Limit scale to max of 2
    imgElement.setAttribute('data-scale', scale);
    updateTransform(imgElement);
}

// Zoom Out
function zoomOut(imgElement) {
    let scale = parseFloat(imgElement.getAttribute('data-scale'));
    scale = Math.max(scale - 0.1, 0.5); // Limit scale to min of 0.5
    imgElement.setAttribute('data-scale', scale);
    updateTransform(imgElement);
}

// Rotate Left
function rotateLeft(imgElement) {
    let rotation = parseInt(imgElement.getAttribute('data-rotation'));
    rotation -= 90; // Rotate left 90 degrees
    imgElement.setAttribute('data-rotation', rotation);
    updateTransform(imgElement);
}

// Rotate Right
function rotateRight(imgElement) {
    let rotation = parseInt(imgElement.getAttribute('data-rotation'));
    rotation += 90; // Rotate right 90 degrees
    imgElement.setAttribute('data-rotation', rotation);
    updateTransform(imgElement);
}

// Update transform with both rotation and zoom
function updateTransform(imgElement) {
    const rotation = imgElement.getAttribute('data-rotation');
    const scale = imgElement.getAttribute('data-scale');
    const size = imgElement.getAttribute('data-size'); // Get the selected size
    imgElement.style.transform = `scale(${scale}) rotate(${rotation}deg)`;

    // Optionally, adjust image size based on selected magnet size
    if (size === '515x515') {
        imgElement.style.maxWidth = '515px';
        imgElement.style.maxHeight = '515px';
    } else if (size === '515x823') {
        imgElement.style.maxWidth = '515px';
        imgElement.style.maxHeight = '823px';
    }
}
