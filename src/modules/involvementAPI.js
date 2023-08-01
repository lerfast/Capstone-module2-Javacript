async function getLikes(appId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to get likes.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error('Failed to get likes:', error);
    return [];
  }
}

async function createLike(appId, itemId) {
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

    return true;
  } catch (error) {
    // console.error('Failed to create like:', error);
    return false;
  }
}

export { getLikes, createLike };