import './style.css';
import showComments from './modules/popup.js';
import { getLikes, createLike } from './modules/involvementAPI.js';
import { countItems, countComments } from './modules/itemCounter.js'; // Import the item counter functions

const apiUrl = 'https://api.tvmaze.com/shows';
const appId = 'TsHUjYeYSyNZ9XlIQTrp'; // Replace with your actual app ID

async function fetchItems() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return []; // Return an empty array or appropriate default value in case of an error
  }
}

async function renderItems(items, likesData) {
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
        <p class="like-counter" data-like-count="${likesCount}">${likesCount} Likes</p>
      </div>
    `;

    const commentsButton = document.createElement('button');
    commentsButton.innerText = 'Show Comments'; // Button text
    commentsButton.addEventListener('click', () => showComments(item)); // Use showComments directly as the event listener

    itemElement.appendChild(commentsButton);
    itemsContainer.appendChild(itemElement);
  });
}

async function handleLikeButtonClick(itemId) {
  try {
    const likesCount = await createLike(appId, itemId);
    if (likesCount !== null) {
      const likeCounter = document.querySelector(`[data-item-id="${itemId}"] + .like-counter`);
      likeCounter.innerText = `${likesCount} Likes`;

      // Store the updated like count in local storage
      likeCounter.setAttribute('data-like-count', likesCount);
      localStorage.setItem(`likes_${itemId}`, likesCount);
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

async function init() {
  const items = await fetchItems();
  const likesData = await getLikes(appId);

  renderItems(items, likesData);

  items.forEach((item) => {
    const itemId = item.id;
    const likeCounter = document.querySelector(`[data-item-id="${itemId}"] + .like-counter`);
    const storedLikesCount = localStorage.getItem(`likes_${itemId}`);

    if (likeCounter && storedLikesCount !== null) {
      likeCounter.innerText = `${storedLikesCount} Likes`;
      likeCounter.setAttribute('data-like-count', storedLikesCount);
    } else if (likeCounter) {
      // If the like count is not found in local storage, set a default value
      likeCounter.innerText = '0 Likes';
      likeCounter.setAttribute('data-like-count', '0');
    }
  });

  // Count and display the total number of items on the homepage
  const totalItemsCount = countItems();
  const totalItemsCounter = document.getElementById('total-items-counter');
  totalItemsCounter.innerText = `Total Items: ${totalItemsCount}`;

  // Count and display the total number of comments on the homepage
  const totalCommentsCount = countComments();
  const totalCommentsCounter = document.getElementById('total-comments-counter');
  totalCommentsCounter.innerText = `Total Comments: ${totalCommentsCount}`;
}

init();
