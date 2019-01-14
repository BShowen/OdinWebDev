
const container = document.querySelector("#container");

const para = document.createElement('p');
para.textContent = "Hey I'm Red!";
para.style.color = "red";

container.appendChild(para);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

container.appendChild(h3);

const content = document.createElement('div');
content.classList.add('content');
content.setAttribute("style", "border: 1px solid black; background-color: pink");

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";

const secondPara = document.createElement('p');
secondPara.textContent = "me too!";

content.appendChild(h1);
content.appendChild(secondPara);
container.appendChild(content);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("HELLO World!");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', function(e) {
    e.target.style.background = 'blue'; 
});