import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: 'img/command.jpg',
    original: 'img/command-big.jpg',
    description: 'Command work',
  },
  {
    preview: 'img/idea.jpg',
    original: 'img/idea-big.jpg',
    description: 'Idea',
  },
  {
    preview: 'img/list.jpg',
    original: 'img/list-big.jpg',
    description: 'List',
  },
  {
    preview: 'img/interior.jpg',
    original: 'img/interior-big.jpg',
    description: 'Interior',
  },
  {
    preview: 'img/room.jpg',
    original: 'img/room-big.jpg',
    description: 'Room',
  },
  {
    preview: 'img/office.jpg',
    original: 'img/office-big.jpg',
    description: 'Office',
  },
  {
    preview: 'img/work.jpg',
    original: 'img/work-big.jpg',
    description: 'Work',
  },
  {
    preview: 'img/programming.jpg',
    original: 'img/programming-big.jpg',
    description: 'Programming',
  },
  {
    preview: 'img/plan.jpg',
    original: 'img/plan-big.jpg',
    description: 'Plan',
  },
];

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
        <a href="${original}">
          <img src="${preview}" alt="${description}" class="gallery-image" />
        </a>
      </li>`
  )
  .join('');

gallery.innerHTML = markup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});