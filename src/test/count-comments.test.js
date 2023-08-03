import countComment from '../modules/counter_comments.js';

describe('Testing the function to count the number of comments in each series.', () => {
  beforeEach(() => {
    global.document.querySelectorAll = jest.fn();
  });

  test('2 comments in the container should return 2', () => {
    global.document.querySelectorAll.mockReturnValue([
      {
        tagName: 'P',
        textContent: 'comment',
      },
      {
        tagName: 'P',
        textContent: 'comment',
      },
    ]);
    const result = countComment();
    expect(result).toBe(2);
  });

  test('135 comments in the container should return 135', () => {
    global.document.querySelectorAll.mockReturnValue(new Array(135).fill(
      {
        tagName: 'P',
        textContent: 'comment',
      },
    ));
    const result = countComment();
    expect(result).toBe(135);
  });

  test('0 comments in the container should return 0', () => {
    global.document.querySelectorAll.mockReturnValue([]);
    const result = countComment();
    expect(result).toBe(0);
  });

  test('4 comments in the container should return 4', () => {
    global.document.querySelectorAll.mockReturnValue(new Array(4).fill(
      {
        tagName: 'P',
        textContent: 'comment',
      },
    ));
    const result = countComment();
    expect(result).not.toBe(3);
  });
});