const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const images = document.getElementById('images');

let ContactArray = [];

function Contact(name, email, phone, images){
    this.name = name;
    this.email = email;
    this.phone= phone;
    this.images = images;
}

document.addEventListener('DOMContentLoaded', function () {
    const addMessage = document.querySelector('.input__item')
    const addButton = document.querySelector('.btn__add')
    const todo = document.querySelector('.todo')


let todoList = []

  if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'))
    displayMessages()
  }

  

  addButton.addEventListener('click', function () {
    if (!addMessage.value) {
      return alert('Заполните поле...')
    }
    let newTodo = {
      todo: addMessage.value,
      checked: false,
      important: false
    }
    const contact = new Contact(name.value, email.value, phone.value, images.value);
    ContactArray.push(contact);
    localStorage.setItem('contacts', JSON.stringify(ContactArray));

    todoList.push(newTodo)
    displayMessages()
  })

  function displayMessages () {
    let dispalayMessage = ''
    if (todoList.length === 0) {
      let title = `<h1>Нет активных зач...</h1>`
      todo.innerHTML = title
    }
    todoList.forEach((item) => {
      dispalayMessage += `
      <li>
        <label>Name:${item.name}</label>
        <br>
        <label>e-Mail:${item.email}</label>
        <br>
        <label>Phone:${item.phone}</label>
        <br>
        <label>URL-images:${item.images}</label>
        <br>
        <button id="btn__delete">delete</button>
      </li>
    `
    todo.innerHTML = dispalayMessage
    localStorage.setItem('todo', JSON.stringify(todoList))
    addMessage.value = ''
    })
  }
  todo.addEventListener('click', function(event){
    if(event.target.id === 'btn__delete'){
        let recordItem = event.target.parentElement;
        todo.removeChild(recordItem);
        let tempContactList = ContactArray.filter(function(record){
            return (record.id !== parseInt(recordItem.firstElementChild.lastElementChild));
        });
        ContactArray = tempContactList;
        localStorage.setItem('contacts', JSON.stringify(ContactArray));
    }
});


})



//Time
let clock = document.getElementById('clock');
function clockTime() {
    let 
    time = new Date(),
    h = time.getHours().toString(),
    m = time.getMinutes().toString(); 

if(h.length<2){h = '0' + h};
if(m.length<2){m = '0' + m};

let clockString = h + ":" + m;
clock.textContent = clockString;
}

setInterval(clockTime, 1000)

