let menu = [
    {
        name: "イチゴ",
        price: 450,
        image: "img/ichiko.png"
    },
    {
        name: "ライム",
        price: 400,
        image: "img/lime.png"
    },
    {
        name: "マンゴー",
        price: 500,
        image: "img/mango.png"
    }
];

function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');

    // 清空
    menuGrid.innerHTML = '';

    menu.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>${item.price}円</p>
                <button class="btn-blue">加入购物车</button>
            </div>
        `;

        // 绑定事件（推荐写法，不用 onclick）
        card.querySelector('button').addEventListener('click', () => {
            addToCart(item.name, item.price + "円");
        });

        menuGrid.appendChild(card);
    });
}

window.onload = function () {
    renderMenu();
    renderSelect();
};

function addItem() {
    // 获取输入框的值
    const name = document.getElementById('itemName').value;
    const price = document.getElementById('itemPrice').value;
    const url = document.getElementById('itemUrl').value || 'https://via.placeholder.com/300x180';

    if (!name || !price) {
        alert("请输入名称和价格！");
        return;
    }

        // 👉 加入数据源
    menu.unshift({
        name: name,
        price: parseInt(price),
        image: url
    });

    alert("菜单内容已更新");
    // 👉 重新渲染
    renderMenu();

    // 清空输入框
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('itemUrl').value = '';

    renderSelect();
}

let cart = [];

function addToCart(name, price) {
    // 价格转数字（去掉 円）
    const priceNumber = parseInt(price);

    // 查找是否已存在
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: priceNumber,
            quantity: 1
        });
    }

    renderCart();
}

function renderCart() {
    const cartBox = document.querySelector('.cart-box');

    // 清空
    cartBox.innerHTML = '';

    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;

        const div = document.createElement('div');
        div.className = 'cart-item';

        div.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price}円 × ${item.quantity}</span>
        `;

        cartBox.appendChild(div);
    });

    // 分割线
    cartBox.innerHTML += `<hr>`;

    // 总计
    cartBox.innerHTML += `
        <p><strong>总数量：${totalQuantity}</strong></p>
        <p><strong>总价格：${totalPrice}円</strong></p>
    `;
}

function renderSelect() {
    const select = document.getElementById('editSelect');

    select.innerHTML = '';

    menu.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${item.name} (${item.price}円)`;
        select.appendChild(option);
    });

    // 默认选中第一个
    if (menu.length > 0) {
        select.value = 0;
        fillEditInputs(0);
    }
}

document.addEventListener('change', function(e) {
    if (e.target.id === 'editSelect') {
        fillEditInputs(e.target.value);
    }
});

function fillEditInputs(index) {
    const item = menu[index];
    document.getElementById('editName').value = item.name;
    document.getElementById('editPrice').value = item.price;
}

function updateItem() {
    const index = document.getElementById('editSelect').value;
    const newName = document.getElementById('editName').value;
    const newPrice = document.getElementById('editPrice').value;

    if (!newName || !newPrice) {
        alert("请输入名称和价格！");
        return;
    }

    // 更新数据源
    menu[index].name = newName;
    menu[index].price = parseInt(newPrice);

    // 重新渲染
    renderMenu();
    renderSelect();

    alert("修改成功！");
}