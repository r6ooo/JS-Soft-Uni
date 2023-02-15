function solve() {
  
  const input = document.getElementById('input');
  const output = document.querySelector('#output');
  let counter = 0;
  let out = '';
  const text = input.value.split('.').filter((e) => e.length > 0);
  debugger
  for (let i = 0; i < text.length; i++) {
    if (counter == 0) {
      out += '<p>'
    }
    else if (counter == 3 || i == text.length) {
      out += '</p>';
      counter = 0;
      i--;
      continue;
    }
    if (counter < 3) {
      out += text[i] + '.';
    }
    counter++;
  }
  output.innerHTML = out;

}
