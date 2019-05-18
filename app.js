//Book Constructor - для созданием объекта книги
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
};

//UI Constructor - набор прототипных методов для добавление книги в библиотеку, удаление из библиотеки, алерты
function UI(){};

//add book to list
UI.prototype.addBookToList = function(book){
  const bookList = document.getElementById('book-list');
  //create tr element
  const row = document.createElement('tr');
  //insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete"> X </a></td>`;
  bookList.appendChild(row);
}

//Clear fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit',function(e){
  //Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  
  //initialize book
  const book = new Book(title, author, isbn);
  
  //initialize UI
  const ui = new UI();

  //add book to UI
  ui.addBookToList(book);

  //clear fields
  ui.clearFields();

  

  e.preventDefault();
});

