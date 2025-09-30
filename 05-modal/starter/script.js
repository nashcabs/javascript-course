// 'use strict';

// console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');
// console.log('Modal project ready!');

// const modalEl = document.querySelector('.modal');
// const overlayEl = document.querySelector('.overlay');
// const btnCloseModalEl = document.querySelector('.close-modal');
// const btnsOpenModalEl = document.querySelectorAll('.show-modal');
// console.log('Open buttons:', btnsOpenModalEl.length);

// // Create our openModal function
// const openModal = function () {
//   modalEl.classList.remove('hidden');

//   overlayEl.classList.remove('hidden');
// };

// const closeModal = function () {
//   // Add the hidden class back to modal to hide it
//   modalEl.classList.add('hidden');

//   // Add the hidden class back to overlay to hide dark background
//   overlayEl.classList.add('hidden');
// };

// btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

// btnCloseModalEl.addEventListener('click', closeModal);

// // Attach closeModal function to overlay click
// overlayEl.addEventListener('click', closeModal);
'use strcit';

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Helper functions
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

// Event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
