const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
    document.body.style.backgroundColor = color.value;

    if (color.value === '#ffffff') {
        text.textContent = `颜色代码: ${color.value} (白色)`;
    } else if (color.value === '#000000') {
        text.textContent = `颜色代码: ${color.value} (黑色)`;
    } else {
        text.textContent = `颜色代码: ${color.value}`;
    }
}

color.addEventListener('input', colorBg);