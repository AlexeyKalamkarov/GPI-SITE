//Модальное окно поиска


function openModalAuth() {
    const modalAuth = document.querySelector("#myModalAuth");
    modalAuth.style.display = 'flex';
    document.body.classList.add('modal-open');
}
function closeModalAuth() {
    const modalAuth = document.querySelector("#myModalAuth");
    modalAuth.style.display = 'none';
}
window.addEventListener('click', function(event) {
    const modalAuth = document.querySelector("#myModalAuth");
    if (event.target === modalAuth) {
        closeModalAuth();
        document.body.classList.remove('modal-open');
    }
});
