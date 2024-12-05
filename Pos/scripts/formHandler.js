// formHandler.js

document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    // Generate a random variable symbol
    const variableSymbol = 'VS' + Math.floor(Math.random() * 100000);
    formData.append('variable_symbol', variableSymbol);

    // Example for submitting data
    // You can send the formData to your server using fetch or XMLHttpRequest.
    fetch('/submitOrder', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert('Order has been successfully submitted!');
        })
        .catch(error => {
            console.error('Error submitting the order:', error);
        });
});
