import imgX from '../assets/delete.svg';
import { postData, getData } from './post-get.js';
import countComment from './counter_comments.js';

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
    <h2 class="popup__title">${items.name}</h2>
  <div class="popup__img-container">
  <img class="popup__img" src="${items.image.original}">
  </div>
    <div class="popup__details">
      <p class="popup__genres"><strong>Category:</strong> ${items.summary}</p>
      <br>
      <p class="popup__genres"><strong>Category:</strong> ${items.genres}</p>
      <p class="popup__runtime"><strong>Duration:</strong> ${items.runtime} min</p>
      <p class="popup__runtime"><strong>Language:</strong> ${items.language}</p>
    </div>
    <div class="popoup__comments">
    <h2 class="comment-header"></h2>
    <div class="container__comments">
    </div>
    <h2 class="popup__AddComment">Add a Comment</h2>
    <div class="inputs-container">
    <input  id="username__input" type="text" placeholder="Your Name">
    <input id="comments__textarea" placeholder="Your insights">
    <button id="btn-submit__comments" type="submit">Submit your comment</button>
    </div>
    </div>
  </div>
  </div>`;
  closePopup();
  submitComment(items);

  const container = document.querySelector('.container__comments');
  const observer = new MutationObserver(() => {
    const result = countComment();
    const commentsHeader = document.querySelector('.comment-header');
    commentsHeader.textContent = `Comments(${result})`;
  });

  observer.observe(container, { childList: true, subtree: true });
};
export default showComments;