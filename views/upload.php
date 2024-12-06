<?php
header('Content-Type: application/json');  // Nastavujeme odpoveď ako JSON

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['image'])) {
    $targetDir = 'uploads/';  // Cesta k priečinku na ukladanie obrázkov
    $targetFile = $targetDir . basename($_FILES['image']['name']);

    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
    if (!in_array($imageFileType, ['jpg', 'png', 'jpeg', 'gif'])) {
        echo json_encode(['success' => false, 'error' => 'Nie je podporovaný formát súboru']);
        exit;
    }

    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
        echo json_encode(['success' => true, 'filePath' => '/uploads/' . basename($_FILES['image']['name'])]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Chyba pri presúvaní súboru']);
    }
}
?>
