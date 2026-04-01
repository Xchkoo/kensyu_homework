const originalName = "张三";

function replaceName() {
    const input = document.getElementById("nameInput").value;
    const names = document.querySelectorAll(".name");

    names.forEach(el => {
        el.textContent = input || originalName;
    });
}

function resetName() {
    const names = document.querySelectorAll(".name");

    names.forEach(el => {
        el.textContent = originalName;
    });
}