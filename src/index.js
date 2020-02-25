import './scss/style.scss';

const draggableList = document.querySelector('#draggable-list');
const checkBtn = document.querySelector('#check');

const richestPeople = [
  'Bill Gates',
  'Warren Buffett',
  'Amancio Ortega',
  'Mark Zuckerberg',
  'Larry Ellison',
  'Carlos Slim Helu',
  'Larry Page',
  'Mukesh Ambani',
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
  [...richestPeople].forEach((person, index) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-index', index);

    listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `;

    listItems.push(listItem);
    draggableList.appendChild(listItem);
  });
}
