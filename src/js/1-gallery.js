import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: '/goit-js-hw-09/img/command.jpg',
    original: '/goit-js-hw-09/img/command-big.jpg',
    description: 'Command work',
  },
  {
    preview: '/goit-js-hw-09/img/idea.jpg',
    original: '/goit-js-hw-09/img/idea-big.jpg',
    description: 'Idea',
  },
  {
    preview: '/goit-js-hw-09/img/list.jpg',
    original: '/goit-js-hw-09/img/list-big.jpg',
    description: 'List',
  },
  {
    preview: '/goit-js-hw-09/img/interior.jpg',
    original: '/goit-js-hw-09/img/interior-big.jpg',
    description: 'Interior',
  },
  {
    preview: '/goit-js-hw-09/img/room.jpg',
    original: '/goit-js-hw-09/img/room-big.jpg',
    description: 'Room',
  },
  {
    preview: '/goit-js-hw-09/img/office.jpg',
    original: '/goit-js-hw-09/img/office-big.jpg',
    description: 'Office',
  },
  {
    preview: '/goit-js-hw-09/img/work.jpg',
    original: '/goit-js-hw-09/img/work-big.jpg',
    description: 'Work',
  },
  {
    preview: '/goit-js-hw-09/img/programming.jpg',
    original: '/goit-js-hw-09/img/programming-big.jpg',
    description: 'Programming',
  },
  {
    preview: '/goit-js-hw-09/img/plan.jpg',
    original: '/goit-js-hw-09/img/plan-big.jpg',
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
