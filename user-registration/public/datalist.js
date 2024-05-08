// Fetch user data from server
fetch('/userList')
    .then(response => response.json())
    .then(data => {
        const userList = data.userList;
        const userDataList = document.getElementById('userDataList');
        userList.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
            userDataList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
