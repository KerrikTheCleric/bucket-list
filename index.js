const mainList = document.querySelector(".list");

const paragraph1 = document.createElement("p");
paragraph1.innerText = "Eat Mountain Of Ice Cream";

const paragraph2 = document.createElement("p");
paragraph2.innerText = "Fly To The Moon";

document.body.appendChild(paragraph1)
mainList.insertAdjacentElement("beforeend", paragraph2);

console.log(mainList.innerHTML);
