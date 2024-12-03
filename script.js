function openModal(id) {
    document.getElementById(`modal-${id}`).style.display = "flex";
}
function closeModal(id) {
    document.getElementById(`modal-${id}`).style.display = "none";
}

document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});