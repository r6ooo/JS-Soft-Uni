window.addEventListener('load', solve);

function solve() {
    const nextBtn = document.getElementById('next-btn');
    let inputValues = Array.from(document.getElementById('append-ticket').querySelectorAll('input'));
    const preview = document.querySelector('.ticket-info-list');
    const confirm = document.querySelector('.confirm-ticket');
    const divEl = document.querySelector('#main');
    const body = document.querySelector('#body');
    let inputCopy = [];

    const firstName = inputValues[0];
    const lastName = inputValues[1];
    const numOfPeople = inputValues[2];
    const date = inputValues[3];
    const days = inputValues[4];
    console.log(inputValues[0].value);


    nextBtn.addEventListener('click', (event) => {

        if (firstName.value && lastName.value && numOfPeople.value && date.value && days.value != '') {

            inputCopy.push(firstName.value, lastName.value, numOfPeople.value, date.value, days.value);

            const liElement = document.createElement('li');
            liElement.id = 'list-1';
            liElement.classList.add('ticket');
            preview.appendChild(liElement);
            const article = document.createElement('article');
            liElement.appendChild(article);
            const h3 = document.createElement('h3');
            h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
            article.appendChild(h3);
            const p1 = document.createElement('p');
            p1.textContent = `From date: ${date.value}`;
            article.appendChild(p1);
            const p2 = document.createElement('p');
            p2.textContent = `For ${days.value} days`;
            article.appendChild(p2);
            const p3 = document.createElement('p');
            p3.textContent = `For ${numOfPeople.value} people`;
            article.appendChild(p3);

            const editBtn = document.createElement('button');
            editBtn.addEventListener('click', callBack);
            editBtn.id = 'editButton';
            editBtn.innerHTML = 'Edit';
            editBtn.classList.add('edit-btn');
            liElement.appendChild(editBtn);


            const continueBtn = document.createElement('button');
            continueBtn.addEventListener('click', forward);
            continueBtn.innerHTML = 'Continue';
            continueBtn.classList.add('continue-btn');
            liElement.appendChild(continueBtn);


            for (const input of inputValues) {
                input.value = '';
            }

            nextBtn.disabled = true;
            

            function callBack() {
            
                for (let i = 0; i < inputValues.length; i++) {
                    inputValues[i].value = inputCopy[i];
        
                }
                nextBtn.disabled = false;
                preview.removeChild(liElement);
            };
            function forward() {

                const liElement = document.createElement('li');
                liElement.classList.add('ticket-content');
                confirm.appendChild(liElement);
                const article = document.createElement('article');
                liElement.appendChild(article);
                const h3 = document.createElement('h3');
                h3.textContent = `Name: ${inputCopy[0]} ${inputCopy[1]}`;
                article.appendChild(h3);
                const p1 = document.createElement('p');
                p1.textContent = `From date: ${inputCopy[3]}`;
                article.appendChild(p1);
                const p2 = document.createElement('p');
                p2.textContent = `For ${inputCopy[4]} days`;
                article.appendChild(p2);
                const p3 = document.createElement('p');
                p3.textContent = `For ${inputCopy[2]} people`;
                article.appendChild(p3);
    
                const confirmBtn = document.createElement('button');
                confirmBtn.addEventListener('click', confrm);
                confirmBtn.id = 'confirmButton';
                confirmBtn.innerHTML = 'Confirm';
                confirmBtn.classList.add('confirm-btn');
                liElement.appendChild(confirmBtn);
    
    
                const cancelBtn = document.createElement('button');
                cancelBtn.addEventListener('click', reload);
                cancelBtn.innerHTML = 'Cancel';
                cancelBtn.classList.add('cancel-btn');
                liElement.appendChild(cancelBtn);

                nextBtn.disabled = true;
                document.getElementById('list-1').remove();

                function confrm() {
                    body.removeChild(divEl);
                   const h1 = document.createElement('h1');
                    h1.id = 'thank-you';
                    h1.innerHTML = "Thank you, have a nice day! ";
                    body.appendChild(h1);
                    const backBtn = document.createElement('button');
                    backBtn.addEventListener('click', reload);
                    backBtn.id = 'back-btn';
                    backBtn.textContent = 'Back';
                    body.appendChild(backBtn);
                }

                function reload() {
                    window.location.reload();
                }
            };

        }

        event.preventDefault();
    });

}




