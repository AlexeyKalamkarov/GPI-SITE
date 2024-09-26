//Модальное окно events


function openModalAuthEvent() {
    const modalEvent = document.querySelector("#myModalEvent");
    modalEvent.style.display = 'flex';
    document.body.classList.add('modal-open');
}
function closeModalAuthEvent() {
    const modalEvent = document.querySelector("#myModalEvent");
    modalEvent.style.display = 'none';
}
window.addEventListener('click', function(event) {
    const modalAuth = document.querySelector("#myModalEvent");
    if (event.target === modalAuth) {
        closeModalAuthEvent();
        document.body.classList.remove('modal-open');
    }
});
