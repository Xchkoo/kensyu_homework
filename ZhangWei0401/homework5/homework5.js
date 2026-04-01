function register() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const confirmPasswordInput = document.getElementById('confirmPassword').value;
    
    // 1 用户名：只能包含字母和数字
    const usernameReg = /^[A-Za-z0-9]+$/;
    if (!usernameReg.test(usernameInput)) {
        window.alert("用户名只能包含字母和数字");
        return;
    }

    // 2 密码长度：8-16位
    if (passwordInput.length < 8 || passwordInput.length > 16) {
        window.alert("密码长度必须是8-16位");
        return;
    }

    // 3 密码必须包含：大写、小写、数字
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    if (!passwordReg.test(passwordInput)) {
        window.alert("密码必须包含大写字母、小写字母和数字");
        return;
    }

    // 4 两次密码一致
    if (passwordInput !== confirmPasswordInput) {
        window.alert("两次输入的密码不一致");
        return;
    }

    window.alert("注册成功");  
}