const mainList = document.querySelector(".list");

const paragraph1 = document.createElement("p");
paragraph1.innerText = "Eat Mountain Of Ice Cream";

const paragraph2 = document.createElement("p");
paragraph2.innerText = "Fly To The Moon";

mainList.insertAdjacentElement("beforeend", paragraph1)
mainList.insertAdjacentElement("beforeend", paragraph2);

const divString = "<div>This is a div element as a string</div>";

console.log(mainList.innerHTML);

//mainList.innerHTML = divString;

//console.log(mainList.innerHTML);

mainList.insertAdjacentHTML("beforeend", divString);
console.log(mainList.innerHTML);

