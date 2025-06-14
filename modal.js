'use strict';
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal');

const displayModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener('click', displayModal);

modal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

// Activating the esc key so you can hide message once esc is pressed
document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    hideModal();
});
