const hint = document.getElementById('colorHint');
const color = document.getElementById('colorPicker');
const header = document.getElementById('colorHeader');
const text = document.getElementById('colorText');

const colorBg = () => {
    header.style.color = color.value;
    text.style.color = color.value;
    hint.textContent = `当前文字颜色：${color.value}`;
}

color.addEventListener('input', colorBg);