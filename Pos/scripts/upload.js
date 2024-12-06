const uploadInput = document.getElementById('upload-input');
const imageGallery = document.getElementById('image-gallery');

uploadInput.addEventListener('change', (e) => {
    const files = e.target.files;

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const imgElement = document.createElement('img');
            imgElement.src = event.target.result;
            imgElement.alt = 'Nahral sa obrázok';
            imgElement.classList.add('gallery-image');

            const wrapper = document.createElement('div');
            wrapper.classList.add('image-wrapper');

            const editButton = document.createElement('button');
            editButton.textContent = 'Upraviť';
            editButton.classList.add('edit-btn');
            editButton.addEventListener('click', () => {
                localStorage.setItem('imageToEdit', imgElement.src);
                window.location.href = 'edit.html';
            });

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Odstrániť';
            removeButton.classList.add('remove-btn');
            removeButton.addEventListener('click', () => {
                wrapper.remove();
            });

            wrapper.appendChild(imgElement);
            wrapper.appendChild(editButton);
            wrapper.appendChild(removeButton);
            imageGallery.appendChild(wrapper);
        };
        reader.readAsDataURL(file);
    }
});
