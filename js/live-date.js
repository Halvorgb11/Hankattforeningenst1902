(() => {
  const formatter = new Intl.DateTimeFormat('nb-NO', {
    timeZone: 'Europe/Oslo',
    day: '2-digit',
    month: '2-digit',
  });

  function updateDate() {
    const parts = formatter.formatToParts(new Date());
    const day = parts.find(part => part.type === 'day').value;
    const month = parts.find(part => part.type === 'month').value;
    document.querySelectorAll('[data-live-date]').forEach(element => {
      element.textContent = `${day}.${month}`;
    });
  }

  updateDate();
  setInterval(updateDate, 1000);
})();