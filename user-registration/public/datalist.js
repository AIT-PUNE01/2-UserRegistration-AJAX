// Fetch user data from server
fetch('/userList') //It asks the server for user data.
    .then(response => response.json())  //
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
//we are extracting the email id and the username from which we log in 
