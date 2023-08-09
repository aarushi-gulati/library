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
  this.info = function () {
    return `${title} by ${author}, ${pages} pages`;
  };
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
      if (x != "info" && x != "read") {
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

  let readButtons = document.querySelectorAll(".read");

  readButtons.forEach((readbutton) => {
    readbutton.addEventListener('click', () => {
      readbutton.classList.remove("read");
      readbutton.classList.add("unread");
      readbutton.innerHTML = "Unread";
      showBooks();
    })
  })

  let unreadButtons = document.querySelectorAll(".unread");

  unreadButtons.forEach((unreadbutton) => {
    unreadbutton.addEventListener('click', () => {
      unreadbutton.classList.remove("unread");
      unreadbutton.classList.add("read");
      unreadbutton.innerHTML = "Read";
      showBooks();
    })
  });
}
