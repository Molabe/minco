<?php
if (isset($_GET['img'])) {
    $imagePath = urldecode($_GET['img']);
} else {
    header('Location: index.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editovať obrázok</title>
    <link rel="stylesheet" href="/assets/css/spognetky.css">
</head>
<body>

<h1>Úprava obrázku</h1>

<img id="imageToEdit" src="<?= $imagePath ?>" alt="Editable Image">

<div>
    <button id="zoomIn">Priblížiť</button>
    <button id="zoomOut">Oddialiť</button>
    <button id="rotateLeft">Otočiť doľava</button>
    <button id="rotateRight">Otočiť doprava</button>
</div>

<button id="saveImage">Uložiť obrázok</button>

<script src="/assets/js/scripts.js"></script>
<script>
    const image = document.getElementById('imageToEdit');
    let scale = 1;
    let rotate = 0;

    document.getElementById('zoomIn').onclick = function() {
        scale += 0.1;
        image.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
    };

    document.getElementById('zoomOut').onclick = function() {
        scale -= 0.1;
        image.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
    };

    document.getElementById('rotateLeft').onclick = function() {
        rotate -= 15;
        image.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
    };

    document.getElementById('rotateRight').onclick = function() {
        rotate += 15;
        image.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
    };

    document.getElementById('saveImage').onclick = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(rotate * Math.PI / 180);
        ctx.scale(scale, scale);
        ctx.drawImage(image, -image.width / 2, -image.height / 2);

        canvas.toBlob(function(blob) {
            const formData = new FormData();
            formData.append('image', blob, 'image.jpg');

            fetch('save-image.php', {
                method: 'POST',
                body: formData
            }).then(response => response.json()).then(data => {
                alert('Obrázok bol úspešne uložený!');
                window.location.href = 'index.php';  // Po úspešnom uložení sa presmeruje na index stránku
            });
        });
    };
</script>

</body>
</html>
