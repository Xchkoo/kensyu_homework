document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('TableBody');
    const addBtn = document.querySelector('.btn-add');  
    const registerBtn = document.querySelector('.btn-submit');

    //新規追加
    addBtn.addEventListener('click', () => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" name="name[]" placeholder="氏名（英字）"></td>
            <td><input type="text" name="zipcode[]" placeholder="郵便番号"></td>
            <td><input type="text" name="address[]" placeholder="住所"></td>
            <td><input type="text" name="tel[]" placeholder="電話番号"></td>
            <td><input type="text" name="mobile[]" placeholder="携帯電話番号"></td>
            <td><input type="email" name="email[]" placeholder="個人メールアドレス"></td>
            <td><button type="button" class="btn-delete">削除</button></td>
        `;
        tableBody.appendChild(newRow);
    });

    //削除
    tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-delete')) {
            const rows = tableBody.querySelectorAll('tr');
            if (rows.length > 1) {
                e.target.closest('tr').remove();
            } else {
                const inputs = rows[0].querySelectorAll('input');
                inputs.forEach(input => input.value = '');
                alert('已清空最后一行内容');
            }
        }
    });

    //登録
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const rows = tableBody.querySelectorAll('tr');
        for (let i = 1; i < rows.length; i++) {
            rows[i].remove();
        }

        const firstRowInputs = tableBody.querySelectorAll('tr:first-child input');
        firstRowInputs.forEach(input => {
            input.value = '';
        });

        alert('登记成功！表格已重置。');
    });
});
