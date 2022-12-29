async function postData(url, data={})
{
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

export function sendMessage(host, channel, content)
{
  return postData(host + "/create-message", {channel, content});
}
