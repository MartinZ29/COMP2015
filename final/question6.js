
let myH2 = document.createElement('h2');
let h2TextNode = document.createTextNode("DOM Scripting");
myH2.appendChild(h2TextNode);

let myParagraph = document.createElement('p');
myParagraph.style.width = '200px';
myParagraph.style.height = '200px';
myParagraph.style.backgroundColor = 'red';

let myImg = document.createElement('img');
myImg.src = 'a.jpg';
myImg.id = 'img3';
myParagraph.appendChild(myImg);

let myDiv = document.getElementById('questionSix');
myDiv.appendChild(myH2);
myDiv.appendChild(myParagraph);

