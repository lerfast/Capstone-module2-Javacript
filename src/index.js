import './style.css';
import showComments from './modules/popup.js';
import { getLikes, createLike } from './modules/involvementAPI.js';

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

async function renderItems(items) {
  const appId = 'TsHUjYeYSyNZ9XlIQTrp'; // Replace with your actual app ID
  const likesData = await getLikes(appId); // Fetch likes from the API

  const itemsContainer = document.getElementById('items-container');
  itemsContainer.innerHTML = '';

  items.forEach((item) => {
    // Find the likes count for the current item
    const itemLikes = likesData.find((likes) => likes.item_id === item.id);
    const likesCount = itemLikes ? itemLikes.likes : 0;

    const itemElement = document.createElement('div');
    itemElement.className = 'item'; // Add a class name for styling
    itemElement.innerHTML = `<img class="card__img" src="${item.image.medium}">
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
      <div class="item-buttons">
        <button class="item-like-btn" data-item-id="${item.id}" aria-label="Like"></button>
        <p class="like-counter">${likesCount} Likes</p>
      </div>
    `;

    const commentsButton = document.createElement('button');
    commentsButton.innerText = 'Show Comments'; // Button text
    commentsButton.addEventListener('click', () => showComments(item)); // Use showComments directly as the event listener

    itemElement.appendChild(commentsButton);
    itemsContainer.appendChild(itemElement);
  });

  // Update the item counter with the total number of items
  const itemCounter = document.getElementById('item-counter');
  itemCounter.innerText = items.length;
}

async function handleLikeButtonClick(itemId) {
  const appId = 'TsHUjYeYSyNZ9XlIQTrp'; // Replace with your actual app ID
  try {
    const response = await createLike(appId, itemId);
    if (response) {
      // After successful API call, update the like counter by fetching likes again
      const likesData = await getLikes(appId);
      const itemLikes = likesData.find((likes) => likes.item_id === itemId);
      const likesCount = itemLikes ? itemLikes.likes : 0;
      const likeCounter = document.querySelector(`[data-item-id="${itemId}"] + .like-counter`);
      likeCounter.innerText = `${likesCount} Likes`;
    }
  } catch (error) {
    // console.error('Failed to create like:', error);
  }
}

document.addEventListener('click', (event) => {
  if (event.target.matches('.item-like-btn')) {
    const itemId = event.target.getAttribute('data-item-id');
    handleLikeButtonClick(itemId);
  }
});

fetchItems().then((items) => renderItems(items));
