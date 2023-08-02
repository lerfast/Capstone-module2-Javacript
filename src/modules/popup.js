import imgX from '../assets/delete.png';
import { postData, getData } from './post-get.js';

const containerPopup = document.querySelector('.popup__container');

// Function to submit a new comment to the Involvement API

const submitComment = (items) => {
  const username = document.getElementById('username__input');
  const comment = document.getElementById('comments__textarea');

  const btncomments = document.getElementById('btn-submit__comments');
  btncomments.addEventListener('click', async () => {
    if (username.value.trim() === '' || comment.value.trim() === '') {
      return; // Exit the function if any field is empty
    }

    await postData(items, username, comment);
    getData(items);
    username.value = '';
    comment.value = '';
  });
};

// Function to close the popup window with the button "X"

const closePopup = () => {
  const btnX = document.querySelector('.popup__btn_x');
  btnX.addEventListener('click', () => {
    containerPopup.innerHTML = '';
  });
};

// Show popup window with corresponding information
const showComments = (items) => {
  getData(items);
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
    <div class="popoup__comments">
    <div class="container__comments">
    <h2>Comments(2)</h2>
    <p class="comments">Test 1</p>
    </div>
    <h2 class="popup__AddComment">Add a Comment</h2>
    <div class="inputs-container">
    <input  id="username__input" type="text" placeholder="Your Name">
    <textarea name="" id="comments__textarea" placeholder="Your insights"></textarea>
    <button id="btn-submit__comments" type="submit">Submit your comment</button>
    </div>
    </div>
  </div>
  </div>`;
  closePopup();
  submitComment(items);
};

export default showComments;