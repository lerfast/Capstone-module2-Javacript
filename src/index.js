import './style.css';

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

function showComments() {
  // You can implement the logic to fetch and display comments here
  // For demonstration purposes, the 'item' parameter has been removed
}

function renderItems(items) {
  const itemsContainer = document.getElementById('items-container');
  itemsContainer.innerHTML = '';

  items.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.className = 'item'; // Add a class name for styling
    itemElement.innerHTML = `<h2>${item.name}</h2><p>${item.summary}</p>`;

    const commentsButton = document.createElement('button');
    commentsButton.innerText = 'Show Comments'; // Button text
    commentsButton.addEventListener('click', showComments); // Use showComments directly as the event listener

    itemElement.appendChild(commentsButton);
    itemsContainer.appendChild(itemElement);
  });
}

fetchItems().then((items) => renderItems(items));
