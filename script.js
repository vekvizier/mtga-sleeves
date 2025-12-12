let sleeves = [];

fetch('sleeves.json')
  .then(res => res.json())
  .then(data => {
    sleeves = data;
    renderGallery(sleeves);
  });

function renderGallery(list) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  list.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${s.image}">
      <div class="meta">
        <div><strong>${s.year}</strong></div>
        <div>${s.comment}</div>
      </div>
    `;

    gallery.appendChild(card);
  });
}

function filterByYear(year) {
  if (year === 'all') {
    renderGallery(sleeves);
  } else {
    renderGallery(sleeves.filter(s => s.year == year));
  }
}

function searchText(text) {
  const t = text.toLowerCase();
  renderGallery(
    sleeves.filter(s =>
      s.comment.toLowerCase().includes(t)
    )
  );
}