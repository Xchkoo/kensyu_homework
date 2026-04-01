// 1. 使用变量保存
let price = 18;      // 奶茶单价（元）
let count = 35;     // 今日售出杯数
let discount = 20;  // 满减金额（元）

// 2. 使用常量保存税率
const TAX_RATE = 0.06;

// 3. 计算
let total = price * count;                  // 原价总额
let tax = total * TAX_RATE;                 // 应缴税额
let finalAmount = total + tax - discount;   // 实收金额

// 4. 输出（保留 2 位小数）
console.log("原价总额：", total.toFixed(2));
console.log("应缴税额：", tax.toFixed(2));
console.log("实收金额：", finalAmount.toFixed(2));