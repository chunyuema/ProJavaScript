let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("error")), 1000);
});

promise2
.then(res => console.log(res))
.catch(err => console.log(err.message))

// Fetch returns promises

// Use fetch for getting
// fetch("https://google.com")
// .then(response => console.log(response))
// .catch(error => console.log(error))

// Use fetch for posting
// const data = { username: 'example' };
// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });