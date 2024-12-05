// imageEditor.js

function zoomIn(imgElement) {
    let scale = parseFloat(imgElement.getAttribute('data-scale')) || 1;
    scale += 0.1;
    imgElement.style.transform = `scale(${scale})`;
    imgElement.setAttribute('data-scale', scale);
}

function zoomOut(imgElement) {
    let scale = parseFloat(imgElement.getAttribute('data-scale')) || 1;
    scale -= 0.1;
    imgElement.style.transform = `scale(${scale})`;
    imgElement.setAttribute('data-scale', scale);
}

function rotateLeft(imgElement) {
    let rotation = parseInt(imgElement.getAttribute('data-rotation')) || 0;
    rotation -= 90;
    imgElement.style.transform = `rotate(${rotation}deg)`;
    imgElement.setAttribute('data-rotation', rotation);
}

function rotateRight(imgElement) {
    let rotation = parseInt(imgElement.getAttribute('data-rotation')) || 0;
    rotation += 90;
    imgElement.style.transform = `rotate(${rotation}deg)`;
    imgElement.setAttribute('data-rotation', rotation);
}
