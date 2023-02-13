function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.getElementById('searchField');

   function onClick() {
      Array.from(document.querySelectorAll('tbody tr')).forEach( row => {
         if(row.textContent.toLowerCase().includes(input.value.toLowerCase().trim())) {
            row.classList.add('select');
         }else {
            row.classList.remove('select');
         }
      })
      input.value = '';
   }
}