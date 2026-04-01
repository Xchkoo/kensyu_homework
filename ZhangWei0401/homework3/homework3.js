const button = document.getElementById('greetButton');

const submit = (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name) {
        alert(`欢迎，${name}`);
    }
}

button.addEventListener('click', submit);