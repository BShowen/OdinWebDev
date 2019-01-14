
const container = document.querySelector("#container");

const para = document.createElement('p');
para.textContent = "Hey I'm Red!";
para.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

const content = document.createElement('div');
content.classList.add('content');
content.setAttribute("style", "border: 1px solid black; background-color: pink");

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";

const secondPara = document.createElement('p');
secondPara.textContent = "me too!";

content.appendChild(h1);
content.appendChild(secondPara);

container.appendChild(para);
container.appendChild(h3);
container.appendChild(content);