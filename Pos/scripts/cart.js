// cart.js

const uploadInput = document.getElementById('upload-input');
const imageGallery = document.getElementById('image-gallery');
const itemCountElement = document.getElementById('item-count');
const totalPriceElement = document.getElementById('total-price');
let cart = [];

// Funkcia na pridanie obrázkov
uploadInput.addEventListener('change', function (e) {
    const files = e.target.files;

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imgElement = new Image();
            imgElement.src = event.target.result;
            imgElement.alt = 'Nahral sa obrázok';
            imgElement.classList.add('gallery-image');

            const wrapper = document.createElement('div');
            wrapper.classList.add('image-wrapper');

            // Pridanie tlačidla na odstránenie
            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-btn');
            removeButton.textContent = 'Odstrániť';
            removeButton.addEventListener('click', function () {
                removeItemFromCart(wrapper);
            });

            // Výber veľkosti magnetky
            const sizeSelect = document.createElement('select');
            sizeSelect.classList.add('size-select');
            sizeSelect.innerHTML = `
                <option value="515x515">Štvorec 515x515mm - 2,50€</option>
                <option value="515x823">Obdĺžnik 515x823mm - 3,00€</option>
            `;
            sizeSelect.addEventListener('change', function () {
                updateCartItem(wrapper, sizeSelect.value);
            });

            // Pridanie do obalu
            wrapper.appendChild(imgElement);
            wrapper.appendChild(sizeSelect);
            wrapper.appendChild(removeButton);
            imageGallery.appendChild(wrapper);

            // Pridanie do košíka
            addItemToCart(wrapper, sizeSelect.value);
        };
        reader.readAsDataURL(file);
    }
});

// Funkcia na pridanie položky do košíka
function addItemToCart(wrapper, size) {
    const price = size === '515x515' ? 2.5 : 3.0;
    cart.push({ wrapper, size, price });
    updateCartSummary();
}

// Funkcia na odstránenie položky z košíka
function removeItemFromCart(wrapper) {
    cart = cart.filter(item => item.wrapper !== wrapper);
    wrapper.remove();
    updateCartSummary();
}

// Funkcia na aktualizáciu položky v košíku
function updateCartItem(wrapper, newSize) {
    const item = cart.find(item => item.wrapper === wrapper);
    if (item) {
        item.size = newSize;
        item.price = newSize === '515x515' ? 2.5 : 3.0;
        updateCartSummary();
    }
}

// Funkcia na aktualizáciu súhrnu košíka
function updateCartSummary() {
    const itemCount = cart.length;
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    itemCountElement.textContent = itemCount;
    totalPriceElement.textContent = `${totalPrice}€`;
}

// Tlačidlo na odoslanie objednávky
document.getElementById('place-order').addEventListener('click', function () {
    if (cart.length === 0) {
        alert('Košík je prázdny!');
        return;
    }

    // Odošle objednávku (príkladová funkcionalita)
    const orderDetails = cart.map(item => ({
        size: item.size,
        price: item.price
    }));

    console.log('Odoslanie objednávky:', orderDetails);

    alert('Objednávka bola úspešne odoslaná!');
    cart = [];
    imageGallery.innerHTML = '';
    updateCartSummary();
});
