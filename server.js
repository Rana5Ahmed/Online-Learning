console.log('Hello, Node.js!');

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, HTTP Server!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Display Date and Time using JavaScript
// const datetimeElement = document.getElementById('datetime');
// const currentDate = new Date();
// datetimeElement.innerText = `Current Date and Time: ${currentDate}`;

// // DOM Manipulation
// const demoElement = document.getElementById('demo');
// demoElement.style.color = 'blue';
// demoElement.innerHTML = 'This paragraph is updated using JavaScript.';

// // Event Handling
// const buttonElement = document.getElementById('myButton');
// buttonElement.addEventListener('click', function () {
//     alert('Button Clicked!');
// });

// // AJAX using Fetch API
// const userDataElement = document.getElementById('userData');
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(user => {
//             const listItem = document.createElement('li');
//             listItem.innerText = `Name: ${user.name}, Email: ${user.email}`;
//             userDataElement.appendChild(listItem);
//         });
//     })
//     .catch(error => console.error('Error fetching data:', error));
