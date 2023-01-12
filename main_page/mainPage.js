/*const h1 = document.getElementsByTagName('h1');
console.log(h1)

const logo = document.getElementById('logo');

logo.setAttribute('src', '');
console.log(logo);*/

/*const btn = document.createElement('button');
const homeElement = document.querySelector('.products-container');
homeElement.append(btn);
btn.textContent = 'knopka'

homeElement.insertAdjacentElement('afterend', btn);

btn.classList.add('btn-shop', 'buy-all-btn');
btn.classList.remove('buy-all-btn');

const checkClass = btn.classList.contains('btn-shop');
console.log(checkClass)

btn.setAttribute('type', 'submit');*/


/*const addElement = confirm('Want to add element?');
const el = document.querySelector('body');

if (addElement) {
    const img = document.createElement('img');
    img.setAttribute('src', '');
    img.classList.add('main-image');
    img.style.marginTop = '20px';

    el.append(img);
} else {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://google.com');
    link.setAttribute('target', '_blank');
    link.classList.add('main-link');
    link.style.marginTop = '20px';
    link.style.textDecoration = 'none';
    link.textContent = 'GOOGLE';

    el.append(link);
}*/

/*const btn = document.querySelector('.btn-shop');
let counter = 0;

btn.addEventListener('click', () => {
    counter++;
    alert(counter);
})*/

const btn = document.querySelector('.btn-shop');
btn.addEventListener('click', () => {
    //GET
    /*fetch('http://localhost:5000/users')
        .then((res) =>  res.json())
        .then((data) => {
            console.log(data)
        })*/

    //DELETE
   /* fetch('http://localhost:5000/users/6', {
        method: 'DELETE'

    })
        .then((res) =>  res.json())
        .then((data) => {
            console.log(data)
        })*/

    //PATCH POST
    const data = {
        email: "sanzhar@mail.ru",
        password: "fjiewfj319901",
        age: 14,
        name: "Sanzhar"
    }

    fetch('http://localhost:5000/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((data) => {
            const p = document.createElement('p');
            p.textContent = data.message;

            document.querySelector('.banner-box').append(p);
        })
})



