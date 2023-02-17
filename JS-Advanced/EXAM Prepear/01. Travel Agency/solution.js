window.addEventListener('load', solution);

function solution() {
  const editButton = document.getElementById('editBTN');
  const submitButton = document.getElementById('submitBTN');
  const continueButton = document.getElementById('continueBTN');
  const block = document.getElementById('block');
  const preview = document.getElementById('infoPreview');

  submitButton.disabled = false;
  editButton.disabled = true;
  continueButton.disabled = true;

  let inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
  let labels = Array.from(document.getElementById('form').querySelectorAll('label'));
  inputValues.pop();

  submitButton.addEventListener('click', (event) => {
    const fullName = inputValues[0];
    const email = inputValues[1];

    if (fullName.value && email.value !== '') {

      for (let i = 0; i < inputValues.length; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = `${labels[i].textContent} ${inputValues[i].value}`;
        preview.appendChild(liElement);
      }
      for (const input of inputValues) {
        input.value = '';
      }
      event.target.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;

    }
  });
  editButton.addEventListener('click', (ev) => {
    const listItems = Array.from(preview.childNodes);
    for (let i = 0; i < inputValues.length; i++) {
      inputValues[i].value = listItems[i].textContent.split(': ')[1];
      listItems[i].remove();
    }
    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  });
  continueButton.addEventListener('click', (e) => {
    block.innerHTML = '';

    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    block.appendChild(h3);
  });

}
