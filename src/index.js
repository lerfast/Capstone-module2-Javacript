import './style.css';
import showComments from './modules/popup.js';
import { getLikes, createLike } from './modules/involvementAPI.js';
import { countItems } from './modules/itemCounter.js'; // Import the item counter functions

const apiUrl = 'https://api.tvmaze.com/shows';
const appId = 'TsHUjYeYSyNZ9XlIQTrp'; // Replace with your actual app ID

const fetchItems = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return []; // Return an empty array or appropriate default value in case of an error
  }
};

const renderItems = async (items, likesData) => {
  const itemsContainer = document.getElementById('items-container');
  itemsContainer.innerHTML = '';

  const itemsToShow = items.slice(0, 48);

  itemsToShow.forEach((item) => {
    // Find the likes count for the current item
    const itemLikes = likesData.find((likes) => likes.item_id === item.id);
    const likesCount = itemLikes ? itemLikes.likes : 0;

    const itemElement = document.createElement('div');
    itemElement.className = 'item'; // Add a class name for styling
    itemElement.innerHTML = `<img class="card__img" src="${item.image.medium}">
      <h2 class="title-series">${item.name}</h2>
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
};

const handleLikeButtonClick = async (itemId) => {
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
};

document.addEventListener('click', (event) => {
  if (event.target.matches('.item-like-btn')) {
    const itemId = event.target.getAttribute('data-item-id');
    handleLikeButtonClick(itemId);
  }
});

const init = async () => {
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
  totalItemsCounter.innerText = `Total Series: ${totalItemsCount}`;
};

document.addEventListener('DOMContentLoaded', async () => {
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
  totalItemsCounter.innerText = `Total Series: ${totalItemsCount}`;

  // Handle like button click for each item
  const likeButtons = document.querySelectorAll('.item-like-btn');
  likeButtons.forEach((button) => {
    const itemId = button.getAttribute('data-item-id');
    handleLikeButtonClick(itemId);
  });
});

init();
