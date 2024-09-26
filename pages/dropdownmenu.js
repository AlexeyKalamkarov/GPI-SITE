function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
  }
  // Закрытие меню при клике вне его
  window.onclick = function(event) {
    const menu = document.getElementById('dropdownMenu');
    if (!event.target.matches('.menu-button')) {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    }
  }
  