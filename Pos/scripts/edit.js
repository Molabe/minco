let cropper;
let currentImage;
let cart = [];  // Košík pre fotky
const prices = {
    '515x515mm': 2.50,
    '515x823mm': 3.00,
};

const uploadInput = document.getElementById('upload-input');
const imageGallery = document.getElementById('image-gallery');
const editor = document.getElementById('editor');
const editorImageContainer = document.getElementById('editor-image-container');
const saveButton = document.getElementById('save-btn');
const closeEditorButton = document.getElementById('close-editor-btn');
const goToCartButton = document.getElementById('go-to-cart-btn');
const sizeSelect = document.getElementById('size-select');
const cartSummary = document.getElementById('cart-summary');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Nahratie obrázkov
uploadInput.addEventListener('change', function (e) {
    const files = e.target.files;

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imgElement = new Image();
            imgElement.src = event.target.result;
            imgElement.alt = 'Nahral sa obrázok';
            imgElement.setAttribute('data-original', event.target.result);
            imgElement.classList.add('gallery-image');

            const wrapper = document.createElement('div');
            wrapper.classList.add('image-wrapper');

            // Po kliknutí na obrázok otvorí editor
            imgElement.addEventListener('click', function () {
                openEditor(imgElement);
            });

            wrapper.appendChild(imgElement);
            imageGallery.appendChild(wrapper);
        };
        reader.readAsDataURL(file);
    }
});

// Otvorenie editora pre konkrétny obrázok
function openEditor(image) {
    currentImage = image;
    editorImageContainer.innerHTML = ''; // Vymaže starý obsah
    const imgClone = new Image();
    imgClone.src = image.src;
    imgClone.alt = 'Upravovaný obrázok';
    imgClone.id = 'editor-image';

    editorImageContainer.appendChild(imgClone);
    editor.style.display = 'block';

    // Nastavenie správnej veľkosti podľa výberu
    const selectedSize = sizeSelect.value;
    const aspectRatio = selectedSize === '515x515mm' ? 1 : 515 / 823;
    cropper = new Cropper(imgClone, {
        aspectRatio: aspectRatio,
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
        currentImage.src = canvas.toDataURL();  // Uloží upravený obrázok
    }
});

// Uloženie obrázka
saveButton.addEventListener('click', function () {
    if (!cropper) {
        alert('Najskôr musíte upravit obrázok.');
        return;
    }

    const imageData = currentImage.src;
    const imageSize = sizeSelect.value;
    const imagePrice = prices[imageSize];
    const imageDetails = {
        imageData,
        imageSize,
        imagePrice,
    };

    // Pridáme obrázok do košíka
    cart.push(imageDetails);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Aktualizujeme košík
    updateCart();

    // Zmena textu tlačidla na „Dokončiť objednávku“
    goToCartButton.textContent = 'Dokončiť objednávku';
    goToCartButton.onclick = function () {
        window.location.href = '../order.html';  // Prejdeme na stránku s objednávkou
    };

    // Uzavretie editora
    closeEditor();
});

// Uzavretie editora
closeEditorButton.addEventListener('click', function () {
    closeEditor();
});

function closeEditor() {
    editor.style.display = 'none';
    if (cropper) {
        cropper.destroy();
        cropper = null; // Uvoľnenie cropper objektu
    }
}

// Aktualizácia košíka a zobrazenie sumy
function updateCart() {
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const imgElement = document.createElement('img');
        imgElement.src = item.imageData;
        cartItem.appendChild(imgElement);

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('cart-item-details');
        itemDetails.innerHTML = `
            <h3>Magnetka (${item.imageSize})</h3>
            <p>Veľkosť: ${item.imageSize}</p>
            <p>Cena: €${item.imagePrice.toFixed(2)}</p>
        `;
        cartItem.appendChild(itemDetails);

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('cart-item-price');
        itemPrice.textContent = `€${item.imagePrice.toFixed(2)}`;
        cartItem.appendChild(itemPrice);

        cartItems.appendChild(cartItem);
        totalPrice += item.imagePrice;
    });

    totalPriceElement.textContent = `Celková cena: €${totalPrice.toFixed(2)}`;
}

// Prechod do košíka (po uložení obrázka)
goToCartButton.addEventListener('click', function () {
    // Po pridaní obrázka už smeruje na stránku objednávky
});
