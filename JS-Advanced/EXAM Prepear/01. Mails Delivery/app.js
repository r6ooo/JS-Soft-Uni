function solve() {
    const recipientInputElement = document.getElementById('recipientName');
    const titleInputElement = document.getElementById('title');
    const messageInputElement = document.getElementById('message');
    const addButton = document.getElementById('add');
    const resetButton = document.getElementById('reset');
    const listElement = document.getElementById('list');
    const sendList = document.querySelector('.sent-list');
    const deleted = document.querySelector('.delete-list');


    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (recipientInputElement.value != '' && titleInputElement.value != '' && messageInputElement.value != '') {
            recipientInput = recipientInputElement.value;
            titleInput = titleInputElement.value;
            messageInput = messageInputElement.value;


            const list = document.createElement('li');
            const title = document.createElement('h4');
            const recipient = document.createElement('h4');
            const message = document.createElement('span');
            const divButtons = document.createElement('div');
            divButtons.id = 'list-action';
            const sendBtn = document.createElement('button');
            sendBtn.setAttribute('type', 'submit');
            sendBtn.id = 'send';
            sendBtn.textContent = 'Send';
            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('type', 'submit');
            deleteBtn.id = 'delete';
            deleteBtn.textContent = 'Delete';


            title.textContent = `Title: ${titleInputElement.value}`;
            recipient.textContent = `Recipient Name: ${recipientInputElement.value}`;
            message.textContent = messageInputElement.value;

            listElement.appendChild(list)
            list.appendChild(title);
            list.appendChild(recipient);
            list.appendChild(message);
            list.appendChild(divButtons);
            divButtons.appendChild(sendBtn);
            divButtons.appendChild(deleteBtn);

            resetButton.addEventListener('click', (e) => {
                e.preventDefault();
                recipientInputElement.value = '';
                titleInputElement.value = '';
                messageInputElement.value = '';
            });

            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const deletedList = document.createElement('li');
                const mail = document.createElement('span');
                const msgTitle = document.createElement('span');

                mail.textContent = `To: ${recipientInput}`;
                msgTitle.textContent = `Title: ${titleInput}`;

                deleted.appendChild(deletedList);
                deletedList.appendChild(mail);
                deletedList.appendChild(msgTitle);

                list.remove();

            });

            sendBtn.addEventListener('click', (e) => {
                e.preventDefault();

                const listOfSends = document.createElement('li');
                const mail = document.createElement('span');
                const msgTitle = document.createElement('span');
                const btnDiv = document.createElement('div');
                btnDiv.setAttribute('class', 'btn');
                const deleteButton = document.createElement('button');
                deleteButton.setAttribute('type', 'submit');
                deleteButton.setAttribute('class', 'delete');
                deleteButton.textContent = 'Delete';

                mail.textContent = `To: ${recipientInput}`;
                msgTitle.textContent = `Title: ${titleInput}`;

                sendList.appendChild(listOfSends);
                listOfSends.appendChild(mail);
                listOfSends.appendChild(msgTitle);
                listOfSends.appendChild(btnDiv);
                btnDiv.appendChild(deleteButton);

                listElement.removeChild(list);

                deleteButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    const deletedList = document.createElement('li');
                    const mail = document.createElement('span');
                    const msgTitle = document.createElement('span');

                    mail.textContent = `To: ${recipientInput}`;
                    msgTitle.textContent = `Title: ${titleInput}`;

                    deleted.appendChild(deletedList);
                    deletedList.appendChild(mail);
                    deletedList.appendChild(msgTitle);

                    listOfSends.remove();
                });

                
            });
        }
    });

}
solve()