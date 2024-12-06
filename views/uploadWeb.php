<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nahrávanie obrázka</title>
    <link rel="stylesheet" href="../assets/css/spognetky.css">
</head>
<body>

<h1>Vitajte na stránke na nahrávanie obrázkov</h1>

<form id="uploadForm" enctype="multipart/form-data">
    <label for="image">Vyberte obrázok:</label>
    <input type="file" name="image" id="image" accept="image/*" required>
    <button type="submit">Nahráť obrázok</button>
</form>

<div class="uploaded-images">
    <h2>Uploaded Images</h2>
    <!-- Obrázky sa zobrazia po nahraní -->
</div>

<script src="../assets/js/scripts.js"></script>
</body>
</html>
