class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{
  addBookToList(book){
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
  };

  showAlert(message, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    const form = document.getElementById('book-form');
    //insert alert
    container.insertBefore(div, form);

    //remove alert
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  };

  deleteBook(target){
    if (target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  };

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  };
};

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

  //Validate
  if(title === '' || author === '' || isbn === ''){
    //error alert
    ui.showAlert('Ошибка. Заполните все поля.', 'error');
  } else {
    //add book to UI
    ui.addBookToList(book);

    //show success alert
    ui.showAlert('Книга добавлена!', 'success');

    //clear fields
    ui.clearFields();

  }

  e.preventDefault();
});

//Event Listener for delete button
document.getElementById('book-list').addEventListener('click', function(e){
  //initialize UI
  const ui = new UI();
  ui.deleteBook(e.target);

  //show message
  ui.showAlert('Книга удалена!', 'success');
  
  e.preventDefault();
})
