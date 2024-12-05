document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const variableSymbol = 'VS' + Math.floor(Math.random() * 100000);
    formData.append('variable_symbol', variableSymbol);

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
