import '../style/index.scss';

const themeSelect = document.getElementById('theme');
themeSelect.addEventListener('change', () => {
  let themeValue = themeSelect.options[themeSelect.selectedIndex].value;
  window.document.body.setAttribute('data-theme', themeValue);
})
