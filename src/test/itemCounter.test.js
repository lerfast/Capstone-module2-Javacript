import { countItems, countComments } from '../modules/itemCounter.js';

describe('Item Counter Tests', () => {
  const mockItemsContainer = document.createElement('div');

  test('countItems should return the correct number of items', () => {
    // Create some mock item elements and add them to the container
    for (let i = 0; i < 5; i += 1) {
      const mockItem = document.createElement('div');
      mockItem.className = 'item';
      mockItemsContainer.appendChild(mockItem);
    }

    // Replace the actual items container with our mock container
    const itemsContainerMock = jest.spyOn(document, 'getElementById');
    itemsContainerMock.mockReturnValue(mockItemsContainer);

    // Call the countItems function and expect it to return 5
    expect(countItems()).toBe(5);

    // Restore the original implementation of getElementById
    itemsContainerMock.mockRestore();
  });

  test('countComments should return the correct number of comments', () => {
    // Create some mock comment elements and add them to the container
    for (let i = 0; i < 3; i += 1) {
      const mockComment = document.createElement('p');
      mockComment.className = 'comment';
      mockItemsContainer.appendChild(mockComment);
    }

    // Replace the actual comments container with our mock container
    const commentsContainerMock = jest.spyOn(document, 'querySelectorAll');
    commentsContainerMock.mockReturnValue(mockItemsContainer.querySelectorAll('.comment'));

    // Call the countComments function and expect it to return 3
    expect(countComments()).toBe(3);

    // Restore the original implementation of querySelectorAll
    commentsContainerMock.mockRestore();
  });
});
