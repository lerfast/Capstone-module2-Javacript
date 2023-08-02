// modules/itemCounter.js
function countItems() {
  const itemsContainer = document.getElementById('items-container');
  const items = itemsContainer.querySelectorAll('.item');
  return items.length;
}

function countComments() {
  const comments = document.querySelectorAll('.comment');
  return comments.length;
}

export { countItems, countComments };
