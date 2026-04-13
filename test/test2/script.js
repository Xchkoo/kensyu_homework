document.addEventListener("DOMContentLoaded", () => {
    const zip = document.getElementById("zip");
    const tel = document.getElementById("tel");
    const mobile = document.getElementById("mobile");
    const zipMsg = document.getElementById("zipMsg");
    const telMsg = document.getElementById("telMsg");
    const mobileMsg = document.getElementById("mobileMsg");

    // 郵便番号（123-4567）
    zip.addEventListener("input", () => {
    const reg = /^\d{3}-\d{4}$/;
    zipMsg.textContent = reg.test(zip.value) || zip.value === ""
        ? ""
        : "郵便番号は正しい形式で入力してください。";
    });

    // 電話番号（数字）
    tel.addEventListener("input", () => {
    const reg = /^[0-9\-]{10,13}$/;
    telMsg.textContent = reg.test(tel.value) || tel.value === ""
        ? ""
        : "電話番号は正しい形式で入力してください。";
    });

    // 携帯番号
    mobile.addEventListener("input", () => {
    const reg = /^[0-9\-]{10,13}$/;
    mobileMsg.textContent = reg.test(mobile.value) || mobile.value === ""
        ? ""
        : "携帯電話番号は正しい形式で入力してください。";
    });

});