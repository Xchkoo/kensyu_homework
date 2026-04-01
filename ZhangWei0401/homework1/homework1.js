const text = document.getElementById('colorText');
const color = document.getElementById('colorPicker');
const colorPreview = document.getElementById('colorPreview');

const colorBg = () => {
    colorPreview.style.backgroundColor = color.value;
    text.textContent = `カラーコード：${color.value}`;
}

color.addEventListener('input', colorBg);