function search() {
   const list = Array.from(document.querySelectorAll('#towns li'));``
   const search = document.getElementById('searchText');
   const result = document.querySelector('#result');

   let counter = 0;

   list.forEach((element) => {
      if (element.textContent.includes(search.value)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         counter++;
      } else {
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';
      }
   });
   result.textContent = `${counter} matches found`
}
