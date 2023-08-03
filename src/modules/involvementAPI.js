const getLikes = async (appId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to get likes.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

const createLike = async (appId, itemId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  const body = {
    item_id: itemId,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Failed to create like.');
    }

    // Fetch the updated likes count from the server and return it
    const updatedLikesData = await getLikes(appId);
    const updatedItemLikes = updatedLikesData.find((likes) => likes.item_id === itemId);
    return updatedItemLikes ? updatedItemLikes.likes : 0;
  } catch (error) {
    return null;
  }
};

export { getLikes, createLike };
