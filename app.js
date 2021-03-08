// var titles = document.getElementsByClassName('title');
// Array.from(titles).forEach(item => console.log(item));

// const wrap = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wrap);

// // this only gives the first one it sees
// var book = document.querySelector("#book-list li .name");
// console.log(book);
// // this will then return a collection
// var books = document.querySelectorAll("#book-list li .name");
// console.log(books);
// // use a for loop or a forEach
// Array.from(books).forEach(book => console.log(book));


// // Changing Text & HTML Context
// // uncomment the following code to try
// var books = document.querySelectorAll("#book-list li .name"); //returns a node list which works with node list
// books.forEach(book => console.log(book.textContent)); //retrive the text content
// books.forEach(book => book.textContent += ' test'); //retrive the text content
// const bookList = document.querySelector("#book-list"); //getting the innehtml
// console.log(bookList.innerHTML);
// // bookList.innerHTML = '<h2>Lol BUSTED</h2>'; //changing the html
// // bookList.innerHTML += '<p>You are tricked haha</p>'; //appending something to the html


// // DOM nodes
// const banner = document.querySelector("#page-banner");
// console.log("#page-banner node type is: ", banner.nodeType); //getting a number which represents the type 
// console.log("#page-banner node type is: ", banner.nodeName); 
// console.log("#page-banner has chile nodes: ", banner.hasChildNodes()); //true: has child nodes, false: has no child nodes
// const clonedBanner = banner.cloneNode(true); //complete copy, pass in false to just do shallow copy
// console.log(clonedBanner);


// // Traversing the DOM
// const bookList = document.querySelector("#book-list"); 
// // going up to get the parents
// console.log("parent node: ", bookList.parentNode, bookList.parentElement); 
// console.log("parent node: ", bookList.parentNode.parentNode, bookList.parentElement.parentNode); 
// // going down to get the children
// console.log(bookList.childNodes); //getting uncessary text libaries
// console.log(bookList.children);  //use this one to get what we are interested in


// // Traverse the DOM within the sibilings
// const booklist = document.querySelector("#book-list");
// console.log("next sibiling: ", booklist.nextSibling); //getting uncessary libraries
// console.log("next element sibiling: ", booklist.nextElementSibling); //solves the problem
// console.log("previous sibiling: ", booklist.previousSibling); //getting uncessary libraries
// console.log("previous element sibiling: ", booklist.previousElementSibling); //getting uncessary libraries
// booklist.previousElementSibling.querySelector("p").innerHTML += '<br>Too Cool for everyone else!';


// // adding events through event listeners
// var h2 = document.querySelector("#book-list h2"); 
// h2.addEventListener('click', function(e){
//     console.log(e.target);
//     console.log(e);
// })
// const listItems = document.querySelectorAll('#book-list .delete');

// Array.from(listItems).forEach(function(item){
//   item.addEventListener('click', (e) => {

//     const li = e.target.parentElement;
//     console.log('child element to remove:', li);
//     console.log('parent element to remove child from:', li.parentElement);
//     li.parentNode.removeChild(li);

//   });
// });
// // use e.preventDefault() to prevent the default action from happening


// event bubblingL bubbling of an event up the DOM tree
// attach the eventListener on a more global level so we dont repeated add it to all the li in the ul
const list = document.querySelector("#book-list ul"); 
list.addEventListener('click', function(e){
    // check and make sure the event is happening on the delete button
    if (e.target.className == 'delete'){
        const li = e.target.parentElement; 
        list.removeChild(li);
    }
});


// iteracting with the forms
// console.log(document.forms)
const addForm = document.forms["add-book"];
// form emmits a submit event when the button is clicked
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
    // create html element
    const li = document.createElement("li");
    const bookName = document.createElement("span"); 
    const deleteBtn = document.createElement("span");

    // add text content
    deleteBtn.textContent = 'delete'; 
    bookName.textContent = value;

    // add classes
    bookName.classList.add("name"); 
    deleteBtn.classList.add("delete");

    // append to dom
    li.appendChild(bookName); 
    li.appendChild(deleteBtn);
    list.appendChild(li);
});

// // use attribute
// var book = document.querySelector("li:first-child .name"); 
// console.log(book.getAttribute('class'));
// console.log(book.hasAttribute('href'));
// // book.setAttribute('class', 'name-2'); 
// // book.removeAttribute('class');