<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['image'])) {
    $targetDir = 'uploads/';
    $targetFile = $targetDir . basename($_FILES['image']['name']);

    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
        echo json_encode(['success' => true, 'filePath' => '/uploads/' . basename($_FILES['image']['name'])]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Chyba pri presúvaní súboru']);
    }
}
?>
