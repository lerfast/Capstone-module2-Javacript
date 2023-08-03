// modules/itemCounter.js
const countItems = () => {
  const itemsContainer = document.getElementById('items-container');
  const items = itemsContainer.querySelectorAll('.item');
  return items.length;
};

const countComments = () => {
  const comments = document.querySelectorAll('.comment');
  return comments.length;
};

export { countItems, countComments };
