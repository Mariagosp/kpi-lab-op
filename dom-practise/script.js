const input = document.querySelector('#userInput');
const button = document.querySelector('#addButton');
const listContainer = document.querySelector('#list');

const ul = document.createElement('ul');
listContainer.appendChild(ul);

button.addEventListener('click', () => {
  const text = input.value.trim();

  if (text === '') {
    alert('Field must not be empty!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = text;

  ul.appendChild(li);

  input.value = '';
  input.focus();
});
