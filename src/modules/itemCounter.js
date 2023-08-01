// modules/itemCounter.js
function countItems() {
  const itemsContainer = document.getElementById('items-container');
  const items = itemsContainer.querySelectorAll('.item');
  return items.length;
}

export default countItems;
