const app = document.getElementById('app');

const h1 = document.createElement('h1');

const incrementButton = document.createElement('button');
incrementButton.innerText = '+';
const decrementButton = document.createElement('button');
decrementButton.innerText = '-';


h1.textContent = '0';

app.appendChild(h1);
app.appendChild(incrementButton);
app.appendChild(decrementButton);



incrementButton.addEventListener('click',()=>{
    h1.innerText = parseInt(h1.innerText) + 1
})


decrementButton.addEventListener('click',()=>{
    h1.innerText = parseInt(h1.innerText) - 1
})