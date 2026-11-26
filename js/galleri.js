const galleryViewer = document.querySelector('.gallery-viewer');
const galleryPhotos = [...document.querySelectorAll('.gallery-photo')];
const galleryImage = galleryViewer.querySelector('.gallery-full-image');
const galleryPosition = galleryViewer.querySelector('.gallery-position');
const galleryPlay = galleryViewer.querySelector('[data-play]');
const galleryStart = document.querySelector('[data-start]');

let currentPhoto = 0;
let slideshowTimer = null;

function showPhoto(index) {
  currentPhoto = (index + galleryPhotos.length) % galleryPhotos.length;
  const photo = galleryPhotos[currentPhoto];
  galleryImage.src = photo.href;
  galleryImage.alt = photo.querySelector('img').alt;
  galleryPosition.textContent = `${currentPhoto + 1} / ${galleryPhotos.length}`;
}

function stopSlideshow() {
  clearInterval(slideshowTimer);
  slideshowTimer = null;
  galleryPlay.textContent = 'Spill av';
  galleryPosition.setAttribute('aria-live', 'polite');
}

function startSlideshow() {
  slideshowTimer = setInterval(() => showPhoto(currentPhoto + 1), 5000);
  galleryPlay.textContent = 'Pause';
  galleryPosition.setAttribute('aria-live', 'off');
}

function browsePhoto(direction) {
  stopSlideshow();
  showPhoto(currentPhoto + direction);
}

function openGallery(index) {
  showPhoto(index);
  galleryViewer.showModal();
}

if (typeof galleryViewer.showModal === 'function') {
  galleryStart.hidden = false;
  galleryStart.addEventListener('click', () => {
    openGallery(0);
    startSlideshow();
  });

  galleryPhotos.forEach((photo, index) => {
    photo.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openGallery(index);
    });
  });

  galleryPlay.addEventListener('click', () => {
    if (slideshowTimer === null) startSlideshow();
    else stopSlideshow();
  });
  galleryViewer.querySelector('[data-previous]').addEventListener('click', () => browsePhoto(-1));
  galleryViewer.querySelector('[data-next]').addEventListener('click', () => browsePhoto(1));
  galleryViewer.querySelector('[data-close]').addEventListener('click', () => galleryViewer.close());
  galleryViewer.addEventListener('close', stopSlideshow);
  galleryViewer.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    browsePhoto(event.key === 'ArrowLeft' ? -1 : 1);
  });
}
