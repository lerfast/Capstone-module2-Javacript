const countComment = () => {
  const comments = document.querySelectorAll('.comment');
  return comments.length;
};

export default countComment;