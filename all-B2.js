const openModal = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () => {
    modal.style.display = 'block'
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});


