const bookForm = document.querySelector('.book-form');
const title = document.querySelector('.book-title');
const author = document.querySelector('.author');
const isbn = document.querySelector('.isbn');
const table = document.querySelector('.book-table');
const message = document.querySelector('.message');

message.style.display = 'none';

bookForm.addEventListener('submit', addBook);

function addBook(e) {
  console.log(e.target[0].value);
  console.log(title);

  if (
    e.target[0].value != '' &&
    e.target[1].value != '' &&
    e.target[2].value != ''
  ) {
    const tr = document.createElement('tr');
    table.children[1].appendChild(tr);
    const td = [
      document.createElement('td'),
      document.createElement('td'),
      document.createElement('td'),
      document.createElement('td')
    ];

    td[0].innerText = e.target[0].value;
    td[1].innerText = e.target[1].value;
    td[2].innerText = e.target[2].value;
    td[3].innerHTML = '<a href="#">X</a>';

    td.forEach(function(data) {
      console.log(data);
      tr.appendChild(data);
    });

    message.style.display = 'block';
    alertMessage('Book added', 'green');
    setTimeout(timeout, 3000);

    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
  } else {
    message.style.display = 'block';
    alertMessage('Please fill in details.', 'red');
    setTimeout(timeout, 3000);
  }

  e.preventDefault();
}

function alertMessage(msg, color) {
  message.style.backgroundColor = color;
  message.innerText = msg;
  message.style.padding = '1rem';
}

function timeout() {
  message.style.display = 'none';
}
console.log(table);
