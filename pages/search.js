//Открытие выпадающего меню поиска по нажатию на иконку
function openSearch() {
    const dropdown = document.querySelector('.dropdown-content-srch');
    dropdown.classList.toggle('show');
  }
  
// Закрытие выпадающего меню по клику вне его области
  window.onclick = function(event) {
    const dropdown = document.querySelector('.dropdown-content-srch');
    const searchIcon = document.querySelector('.icon_search');    
    // Если клик произошел вне выпадающего меню и вне иконки поиска
    if (!dropdown.contains(event.target) && !searchIcon.contains(event.target)) {
      dropdown.classList.remove('show');
    }
  };
