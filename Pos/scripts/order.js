const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartDetails = document.getElementById('cart-details');

// Zobrazenie položiek v košíku
cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    const img = new Image();
    img.src = item.imageData;
    itemDiv.appendChild(img);
    itemDiv.innerHTML += `<p>Veľkosť: ${item.imageSize}</p>`;
    cartDetails.appendChild(itemDiv);
});

// Odoslanie objednávky
document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Skontrolovanie údajov a potvrdenie objednávky
    alert('Objednávka bola úspešne odoslaná!');
    localStorage.removeItem('cart');
    window.location.href = 'thank-you.html'; // Prepojenie na stránku s potvrdením
});
