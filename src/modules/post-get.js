const postData = async (items, user, usercomment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OsSQl2R6ei1KLnLLBTTT/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: items.id,
      username: user.value,
      comment: usercomment.value,
    }),
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
  });
  const data = await response.text();
  console.log(data);
};

const renderComments = (data) => {
  const commentsContainer = document.querySelector('.container__comments');
  commentsContainer.innerHTML = '';
  data.forEach((data) => {
    commentsContainer.innerHTML += `<p><strong>${data.username}:</strong> ${data.comment}</p>`;
  });
};

const getData = async (items) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OsSQl2R6ei1KLnLLBTTT/comments?item_id=${items.id}`);
  const data = await response.json();

  renderComments(data);
};

export { postData, getData };