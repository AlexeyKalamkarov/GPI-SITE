//Модальное окно cv


function openModalAuthCV() {
    const modalCV = document.querySelector("#myModalCV");
    modalCV.style.display = 'flex';
    document.body.classList.add('modal-open');
}
function closeModalAuthCV() {
    const modalCV = document.querySelector("#myModalCV");
    modalCV.style.display = 'none';
}
window.addEventListener('click', function(event) {
    const modalAuth = document.querySelector("#myModalCV");
    if (event.target === modalAuth) {
        closeModalAuthCV();
        document.body.classList.remove('modal-open');
    }
});
