function solve() {
  const string = document.getElementById('text').value;
  const currCase = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  const toPascal = (text) => text
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join('');

  const toCamel = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  }
  if (currCase === 'Pascal Case') {
    result.textContent = toPascal(string);
  } else if (currCase === 'Camel Case') {
    result.textContent = toCamel(string);
  } else {
    result.textContent = 'Error!'
  }

}