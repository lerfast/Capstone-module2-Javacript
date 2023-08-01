import imgX from '../assets/delete.png';

const containerPopup = document.querySelector('.popup__container');

const showComments = (items) => {
  containerPopup.innerHTML = `
<div class="popup__background">  
<div class="popup__body">
  <button class="popup__btn_x"><img class="img__x" src="${imgX}"></button>
<div class="popup__img-container">
<img class="popup__img" src="${items.image.original}">
</div>
  <div class="popup__details">
    <h2 class="popup__title">${items.name}</h2>
    <p class="popup__genres">Category: ${items.genres}</p>
    <p class="popup__runtime">Duration: ${items.runtime} min</p>
  </div>
</div>
</div>`;
  const btnX = document.querySelector('.popup__btn_x');
  btnX.addEventListener('click', () => {
    containerPopup.innerHTML = '';
  });
};

export default showComments;