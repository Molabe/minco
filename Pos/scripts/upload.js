// upload.js

const uploadInput = document.getElementById('upload-input');
const imagesContainer = document.getElementById('uploaded-images');
const cartList = document.getElementById('cart-list');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-button');
let cart = [];

uploadInput.addEventListener('change', function (e) {
    const files = e.target.files;

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imgElement = document.createElement('img');
            imgElement.src = event.target.result;
            imgElement.classList.add('uploaded-image');

            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('image-wrapper');
            imageWrapper.innerHTML = `
                <button class="edit-button">Upraviť</button>
                <button class="remove-btn">Odstrániť</button>
                <div class="controls">
                    <button class="rotate-btn">Otočiť</button>
                    <button class="zoom-in-btn">Priblížiť</button>
                    <button class="zoom-out-btn">Oddialiť</button>
                    <button class="crop-btn">Orezat'</button>
                </div>
            `;

            const editButton = imageWrapper.querySelector('.edit-button');
            const removeButton = imageWrapper.querySelector('.remove-btn');
            const rotateButton = imageWrapper.querySelector('.rotate-btn');
            const zoomInButton = imageWrapper.querySelector('.zoom-in-btn');
            const zoomOutButton = imageWrapper.querySelector('.zoom-out-btn');
            const cropButton = imageWrapper.querySelector('.crop-btn');

            let cropper;

            editButton.addEventListener('click', () => {
                const controls = imageWrapper.querySelector('.controls');
                controls.style.display = controls.style.display === 'block' ? 'none' : 'block';
                if (!cropper) {
                    cropper = new Cropper(imgElement, {
                        aspectRatio: 1,
                        viewMode: 2,
                        autoCropArea: 0.8,
                    });
                }
            });

            rotateButton.addEventListener('click', () => {
                if (cropper) cropper.rotate(90);
            });

            zoomInButton.addEventListener('click', () => {
                if (cropper) cropper.zoom(0.1);
            });

            zoomOutButton.addEventListener('click', () => {
                if (cropper) cropper.zoom(-0.1);
            });

            cropButton.addEventListener('click', () => {
                if (cropper) {
                    const canvas = cropper.getCroppedCanvas();
                    imgElement.src = canvas.toDataURL();
                }
            });

            removeButton.addEventListener('click', () => imageWrapper.remove());

            imageWrapper.appendChild(imgElement);
            imagesContainer.appendChild(imageWrapper);
        };
        reader.readAsDataURL(file);
    }
});

function addToCart(imgElement) {
    const imageSize = imgElement.getAttribute('data-size');
    const imagePrice = imageSize === '515x515' ? 2.50 : 3.00;

    const cartItem = {
        image: imgElement.src,
        size: imageSize,
        price: imagePrice
    };

    cart.push(cartItem);
    updateCart();
}

function updateCart() {
    cartList.innerHTML = ''; // Clear the current list
    let totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.size} - €${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Celková cena: €${totalPrice.toFixed(2)}`;
}

// Callback pre pridanie do košíka po úprave
checkoutButton.addEventListener('click', function () {
    alert("Pokračujte k platbe.");
});
