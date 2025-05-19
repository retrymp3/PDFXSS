(async function() {
  // Create initial small transaction (amount=1)
  await fetch('/?action=create-transaction', {
    method:'POST', 
    body:'recipient=birdbirdbird&amount=1', 
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  });
  
})();
