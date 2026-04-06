const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(cb => {
  cb.addEventListener('change', (e) => {
    const text = e.target.nextElementSibling;
    text.classList.toggle('done', e.target.checked);
  });
});

// 初始化
document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  const text = cb.nextElementSibling;
  text.classList.toggle('done', cb.checked);
});