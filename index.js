const mainList = document.querySelector(".list");
const header2 = document.querySelector(".owner");


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

for (let i = 0; i < 3; i++) {
    var newItem = document.createElement("p");
    newItem.innerText = "For Loop Item " + (i+1);
    mainList.insertAdjacentElement("beforeend", newItem);
  }

console.log(mainList.children.length);

header2.innerText = "My";

const paragraph3 = document.createElement("p");
paragraph3.innerText = "Learn Unicycle";

mainList.replaceChild(paragraph3, mainList.firstChild);