// JavaScript na obsluhu nahrávania obrázkov a správy galérie

document.getElementById("upload-button").addEventListener("click", function () {
    document.getElementById("file-input").click();
});

document.getElementById("file-input").addEventListener("change", function (event) {
    const file = event.target.files[0];
    const validExtensions = ['image/png', 'image/jpg', 'image/jpeg'];

    if (file && validExtensions.includes(file.type)) {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = function (e) {
            img.src = e.target.result;

            img.onload = function () {
                const width = img.width;
                const height = img.height;

                // Požiadavky na minimálne rozmery
                const minWidth = 200;
                const minHeight = 200;

                // Kontrola minimálnych rozmerov
                if (width < minWidth || height < minHeight) {
                    alert("Obrázok musí mať minimálne rozmery 200x200 pixelov.");
                    return;
                }

                const stred = document.getElementById("stred");

                // Kontajner pre obrázok
                const imageContainer = document.createElement("div");
                imageContainer.className = "image-container";

                // Obrázok
                const previewImg = document.createElement("img");
                previewImg.src = e.target.result;
                previewImg.style.objectFit = "cover";
                previewImg.style.width = "100%";
                previewImg.style.height = "100%";

                // Tlačidlo na odstránenie
                const removeButton = document.createElement("button");
                removeButton.className = "remove-button";
                removeButton.innerText = "X";
                removeButton.onclick = function () {
                    stred.removeChild(imageContainer);
                    if (stred.children.length === 0) {
                        document.getElementById("cart-container").style.display = "none";
                    }
                };

                // Počítanie kusov
                const quantity = document.createElement("div");
                quantity.className = "quantity";

                const quantityText = document.createElement("span");
                quantityText.innerText = "1 ks";

                const decrementButton = document.createElement("button");
                decrementButton.className = "decrement";
                decrementButton.innerHTML = '<span class="material-icons">remove</span>';
                decrementButton.addEventListener("click", function () {
                    let currentQuantity = parseInt(quantityText.innerText.replace(" ks", ""), 10);
                    if (!isNaN(currentQuantity) && currentQuantity > 1) {
                        currentQuantity--;
                        quantityText.innerText = `${currentQuantity} ks`;
                    }
                });

                const incrementButton = document.createElement("button");
                incrementButton.className = "increment";
                incrementButton.innerHTML = '<span class="material-icons">add</span>';
                incrementButton.addEventListener("click", function () {
                    let currentQuantity = parseInt(quantityText.innerText.replace(" ks", ""), 10);
                    if (!isNaN(currentQuantity)) {
                        currentQuantity++;
                        quantityText.innerText = `${currentQuantity} ks`;
                    }
                });

                decrementButton.style.cursor = "pointer";
                incrementButton.style.cursor = "pointer";

                quantity.appendChild(decrementButton);
                quantity.appendChild(quantityText);
                quantity.appendChild(incrementButton);

                // Tlačidlo Upraviť
                const editButton = document.createElement("button");
                editButton.className = "edit-button";
                editButton.innerHTML = `
                    <span class="material-icons">edit</span> Upraviť
                `;
                editButton.onclick = function () {
                    openEditor(previewImg, function (updatedSrc) {
                        previewImg.src = updatedSrc; // Aktualizuje náhľad v galérii
                    });
                };

                // Pridanie prvkov do kontajnera obrázka
                imageContainer.appendChild(previewImg);
                imageContainer.appendChild(removeButton);
                imageContainer.appendChild(quantity);
                imageContainer.appendChild(editButton);
                stred.insertBefore(imageContainer, stred.firstChild);

                // Zobrazenie tlačidla "Pridať do košíka"
                const cartContainer = document.getElementById("cart-container");
                cartContainer.style.display = "flex";
            };
        };
        reader.readAsDataURL(file);
    } else {
        alert("Nesprávny typ súboru. Nahrajte obrázok vo formáte PNG, JPG alebo JPEG.");
    }
});

function openEditor(image, callback) {
    // Vytvorenie modálneho okna pre editor
    const editorModal = document.createElement("div");
    editorModal.className = "editor-modal";

    // Nadpis editoru
    const editorTitle = document.createElement("h2");
    editorTitle.innerText = "Upravte výrez fotografie";
    editorModal.appendChild(editorTitle);

    // Kontajner pre editor obrázkov
    const imageWrapper = document.createElement("div");
    imageWrapper.style.overflow = "hidden";
    imageWrapper.style.width = "100%";
    imageWrapper.style.height = "400px";
    imageWrapper.style.position = "relative";

    // Vytvorenie obrázka v editore
    const editorImage = new Image();
    editorImage.src = image.src;
    editorImage.style.position = "absolute";
    editorImage.style.top = "50%";
    editorImage.style.left = "50%";
    editorImage.style.transform = "translate(-50%, -50%) scale(1)";
    editorImage.style.transformOrigin = "center center";

    let cropFactor = 1;

    // Pridanie obrázka do kontajnera
    imageWrapper.appendChild(editorImage);

    // Posuvník pre zoomovanie
    const cropSliderContainer = document.createElement("div");
    cropSliderContainer.className = "crop-slider-container";

    const cropMinusButton = document.createElement("button");
    cropMinusButton.className = "crop-button";
    cropMinusButton.innerHTML = '<span class="material-icons">remove</span>';
    cropMinusButton.onclick = function () {
        if (cropFactor > 1.1) {
            cropFactor -= 0.1;
            editorImage.style.transform = `translate(-50%, -50%) scale(${cropFactor})`;
        }
    };

    const cropSlider = document.createElement("input");
    cropSlider.type = "range";
    cropSlider.className = "crop-slider";
    cropSlider.min = 1;
    cropSlider.max = 3;
    cropSlider.step = 0.01;
    cropSlider.value = 1;

    cropSlider.oninput = function () {
        cropFactor = cropSlider.value;
        editorImage.style.transform = `translate(-50%, -50%) scale(${cropFactor})`;
    };

    const cropPlusButton = document.createElement("button");
    cropPlusButton.className = "crop-button";
    cropPlusButton.innerHTML = '<span class="material-icons">add</span>';
    cropPlusButton.onclick = function () {
        if (cropFactor < 3) {
            cropFactor += 0.1;
            editorImage.style.transform = `translate(-50%, -50%) scale(${cropFactor})`;
        }
    };

    cropSliderContainer.appendChild(cropMinusButton);
    cropSliderContainer.appendChild(cropSlider);
    cropSliderContainer.appendChild(cropPlusButton);

    // Tlačidlá pre otáčanie
    const rotateLeftButton = document.createElement("button");
    rotateLeftButton.className = "rotate-button";
    rotateLeftButton.innerText = "Otočiť doľava";
    rotateLeftButton.onclick = function () {
        const currentRotation = getRotationDegrees(editorImage.style.transform);
        editorImage.style.transform = `translate(-50%, -50%) rotate(${currentRotation - 90}deg) scale(${cropFactor})`;
    };

    const rotateRightButton = document.createElement("button");
    rotateRightButton.className = "rotate-button";
    rotateRightButton.innerText = "Otočiť doprava";
    rotateRightButton.onclick = function () {
        const currentRotation = getRotationDegrees(editorImage.style.transform);
        editorImage.style.transform = `translate(-50%, -50%) rotate(${currentRotation + 90}deg) scale(${cropFactor})`;
    };

    // Tlačidlo Hotovo
    const doneButton = document.createElement("button");
    doneButton.id = "done-button";
    doneButton.innerText = "Hotovo";
    doneButton.onclick = function () {
        callback(editorImage.src); // Aktualizuje náhľad v galérii
        document.body.removeChild(editorModal); // Odstráni editor
    };

    // Pridanie prvkov do modálneho okna
    editorModal.appendChild(imageWrapper);
    editorModal.appendChild(cropSliderContainer);
    editorModal.appendChild(document.createElement("br"));
    editorModal.appendChild(rotateLeftButton);
    editorModal.appendChild(rotateRightButton);
    editorModal.appendChild(document.createElement("br"));
    editorModal.appendChild(doneButton);

    // Pridanie modálneho okna do tela
    document.body.appendChild(editorModal);
}

// Funkcia na získanie aktuálneho stupňa rotácie
function getRotationDegrees(transform) {
    const match = transform.match(/rotate\((-?\d+)deg\)/);
    return match ? parseInt(match[1], 10) : 0;
}

// Otvorenie a zatvorenie off-canvas košíka
document.getElementById("cart-toggle").addEventListener("click", function () {
    document.getElementById("off-canvas-cart").classList.toggle("open");
});

// Fiktívne ceny pre rôzne veľkosti fotiek
const prices = {
    small: 5.00,  // Cena malej magnetky
    medium: 7.00, // Cena strednej magnetky
    large: 10.00  // Cena veľkej magnetky
};

// Funkcia na pridanie fotky do košíka
function addPhotoToCart(photoSrc, photoSize, quantity) {
    const cartItemsContainer = document.getElementById("cart-items");
    const itemPrice = prices[photoSize]; // Získame cenu podľa veľkosti

    // Vytvorenie položky pre fotku v košíku
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
        <div class="cart-photo">
            <img src="${photoSrc}" alt="Photo" class="cart-item-img">
        </div>
        <div>
            <span>Fotka - ${photoSize.charAt(0).toUpperCase() + photoSize.slice(1)} (x${quantity})</span>
            <div class="size-selector">
                <button class="size-btn small" data-size="small">Malá</button>
                <button class="size-btn medium active" data-size="medium">Stredná</button>
                <button class="size-btn large" data-size="large">Veľká</button>
            </div>
            <div class="price-per-unit">${itemPrice.toFixed(2)} € za kus</div>
        </div>
        <span class="total-price">${(itemPrice * quantity).toFixed(2)} €</span>
        <div class="quantity">
            <button class="decrement">-</button>
            <span class="quantity-text">${quantity}</span>
            <button class="increment">+</button>
        </div>
    `;
    cartItemsContainer.appendChild(cartItem);

    // Pridáme event listener na zmenu veľkosti
    const sizeButtons = cartItem.querySelectorAll(".size-btn");
    sizeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const newSize = button.getAttribute("data-size");
            changeSize(cartItem, newSize);
        });
    });

    // Pridanie event listenerov na zmenu počtu kusov
    cartItem.querySelector(".increment").addEventListener("click", function() {
        changeQuantity(cartItem, 1);
    });
    cartItem.querySelector(".decrement").addEventListener("click", function() {
        changeQuantity(cartItem, -1);
    });

    // Aktualizácia celkovej ceny
    updateTotalPrice();
}

// Funkcia na zmenu veľkosti fotky
function changeSize(cartItem, newSize) {
    const itemPrice = prices[newSize]; // Nová cena podľa veľkosti

    // Zmena ceny a textu v košíku
    const priceSpan = cartItem.querySelector(".total-price");
    const quantity = parseInt(cartItem.querySelector(".quantity-text").textContent, 10);
    priceSpan.textContent = `${(itemPrice * quantity).toFixed(2)} €`;

    // Uloženie zmeny veľkosti
    const sizeButtons = cartItem.querySelectorAll(".size-btn");
    sizeButtons.forEach(button => {
        button.classList.remove("active");
    });
    cartItem.querySelector(`.size-btn.${newSize}`).classList.add("active");

    // Zmena ceny za kus
    cartItem.querySelector(".price-per-unit").textContent = `${itemPrice.toFixed(2)} € za kus`;

    // Udržíme obrázok na jeho pôvodnej veľkosti, nezmeníme ho pri zmene veľkosti
    // Ak chceme zmeniť obrázok, môžeme to urobiť tu, ak by to bolo potrebné:
    // const photoElement = cartItem.querySelector(".cart-item-img");
    // photoElement.src = newPhotoSrc; // Nový obrázok, ak potrebujeme
    // photoElement.style.width = newSize === "small" ? "50px" : (newSize === "medium" ? "100px" : "150px");

    // Aktualizácia celkovej ceny
    updateTotalPrice();
}

// Funkcia na zmenu počtu kusov
function changeQuantity(cartItem, delta) {
    const quantityText = cartItem.querySelector(".quantity-text");
    let quantity = parseInt(quantityText.textContent, 10);

    if (quantity + delta > 0) {
        quantity += delta;
        quantityText.textContent = quantity;

        // Aktualizácia ceny podľa počtu kusov
        const size = cartItem.querySelector(".size-btn.active").getAttribute("data-size");
        const itemPrice = prices[size];
        cartItem.querySelector(".total-price").textContent = `${(itemPrice * quantity).toFixed(2)} €`;

        // Aktualizácia ceny za kus
        cartItem.querySelector(".price-per-unit").textContent = `${itemPrice.toFixed(2)} € za kus`;

        // Aktualizácia celkovej ceny
        updateTotalPrice();
    }
}

// Funkcia na výpočet celkovej ceny
function updateTotalPrice() {
    let total = 0;
    const cartItems = document.querySelectorAll(".cart-item");
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector(".total-price").textContent);
        total += price;
    });
    document.getElementById("total-price").textContent = `Cena: ${total.toFixed(2)} €`;
}

// Nahrávanie a úprava fotky
document.getElementById("file-input").addEventListener("change", function (event) {
    const file = event.target.files[0];
    const validExtensions = ['image/png', 'image/jpg', 'image/jpeg'];

    if (file && validExtensions.includes(file.type)) {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = function (e) {
            img.src = e.target.result;

            img.onload = function () {
                // Požiadavky na minimálne rozmery
                const minWidth = 200;
                const minHeight = 200;

                // Kontrola minimálnych rozmerov
                if (img.width < minWidth || img.height < minHeight) {
                    alert("Obrázok musí mať minimálne rozmery 200x200 pixelov.");
                    return;
                }

                // Pridanie fotky do košíka s predvolenou veľkosťou a počtom
                const photoSize = "medium";  // Prednastavená veľkosť fotky (môžeš to upravit podľa potrieb)
                const quantity = 1;  // Predvolený počet kusov

                addPhotoToCart(img.src, photoSize, quantity);
            };
        };
        reader.readAsDataURL(file);
    } else {
        alert("Nesprávny typ súboru. Nahrajte obrázok vo formáte PNG, JPG alebo JPEG.");
    }
});
