import './style.css';
import showComments from './modules/popup.js';
// import likeButtonImage from './assets/heart.svg';

const apiUrl = 'https://api.tvmaze.com/shows';

async function fetchItems() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return []; // Return an empty array or appropriate default value in case of an error
  }
}

function renderItems(items) {
  const itemsContainer = document.getElementById('items-container');
  itemsContainer.innerHTML = '';

  items.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.className = 'item'; // Add a class name for styling
    itemElement.innerHTML = `<img class="card__img" src="${item.image.medium}">
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
      <div class="item-buttons">
        <button class="item-like-btn" data-item-id="${item.id}" aria-label="Like"></button>
        
      </div>
    `;

    const commentsButton = document.createElement('button');
    commentsButton.innerText = 'Show Comments'; // Button text
    commentsButton.addEventListener('click', () => showComments(item)); // Use showComments directly as the event listener

    itemElement.appendChild(commentsButton);
    itemsContainer.appendChild(itemElement);
  });
}

// function handleLikeButtonClick(event) {
// const itemId = event.target.getAttribute('data-item-id');
// Add your logic here to handle the like button click for the item with the given itemId
// For example, you can add the item to a liked list or perform some other action.
// }

// document.addEventListener('click', (event) => {
// if (event.target.matches('.item-like-btn')) {
// handleLikeButtonClick(event);
// }
// });

fetchItems().then((items) => renderItems(items));
