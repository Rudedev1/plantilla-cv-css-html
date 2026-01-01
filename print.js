function printwithdetails() {
  document.querySelectorAll('details').forEach(d => d.open = true);
  requestAnimationFrame(() => {requestAnimationFrame(() => window.print());
  });
}