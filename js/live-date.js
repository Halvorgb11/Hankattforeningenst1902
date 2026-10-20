(() => {
  const formatter = new Intl.DateTimeFormat('nb-NO', {
    timeZone: 'Europe/Oslo',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  function updateDate() {
    const parts = formatter.formatToParts(new Date());
    const day = parts.find(part => part.type === 'day').value;
    const month = parts.find(part => part.type === 'month').value;
    const year = Number(parts.find(part => part.type === 'year').value);
    // The cultural year changes on May 1, counting from May 1, 1902.
    const culturalYear = year - 1902 - (Number(month) < 5 ? 1 : 0);

    document.querySelectorAll('[data-live-date]').forEach(element => {
      element.textContent = `${day}.${month}`;
    });
    document.querySelectorAll('[data-cultural-year]').forEach(element => {
      element.textContent = culturalYear;
    });
  }

  updateDate();
  setInterval(updateDate, 1000);
})();