let myLibrary = [];

let showButton = document.querySelector(".showBooksButton");

showButton.addEventListener('click', showBooks);

let submitButton = document.querySelector(".submitButton");

submitButton.addEventListener('click', addBookToLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let temp = new Book(title, author, pages, read);
  myLibrary.push(temp);
}

function showBooks() {
  let result = document.querySelector(".result")
  let arrayLength = myLibrary.length;
  result.textContent = "";
  for (var i = 0; i < arrayLength; i++) {
    let card = document.createElement("div");
    card.classList.add("card-class");
    let txt = "";
    for (let x in myLibrary[i]) {
      txt = "";
      if (x != "read") {
        txt += `${x} : ${myLibrary[i][x]}`;
      }
      card.appendChild(document.createTextNode(txt));
      card.appendChild(document.createElement('br'));
    }
    let remove = document.createElement("button")
    remove.classList.add("remove");
    remove.setAttribute('id', i);
    remove.innerHTML = "Remove";

    let haveRead = document.createElement("button");
    haveRead.id = myLibrary[i][title];
    if (myLibrary[i]["read"]){
      haveRead.innerHTML = "Read";
      haveRead.classList.add("read")
    }

    else{
      haveRead.innerHTML = "Not Read"
      haveRead.classList.add("unread")
    }
    card.appendChild(haveRead);
    card.appendChild(remove)
    result.appendChild(card);
  }

  let removeButtons = document.querySelectorAll(".remove");

  removeButtons.forEach((currButton) => {
    currButton.addEventListener('click', () => {
    let position = currButton.id;
    myLibrary.splice (position, 1);
    showBooks();
    })
  })
}

let whole = document.querySelector("body");

whole.addEventListener('click', (e) => {
  if (e.target.classList.contains("read") || e.target.classList.contains("unread")){
    let arrayLength = myLibrary.length;
    for (var i = 0; i < arrayLength; i++){
      if (e.target.id = myLibrary[i]["title"]){
        if (myLibrary[i]["read"] === true){
          myLibrary[i]["read"] = false;
        } 
        else{
          myLibrary[i]["read"] = true;
        }
      }
    }
    showBooks();
  }
})