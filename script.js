var enterButton = document.getElementById('button');
var inputField = document.getElementById('input');
var ul =   document.querySelector("ul");

function inputLength() {
  return inputField.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var newContent = document.createTextNode(inputField.value);
  li.appendChild(newContent);
  ul.appendChild(li);
  inputField.value="";
}

function addListAfterClick() {  
  if (inputLength() > 0) {
    createListElement();
  }}

function addListAfterKeypress() {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }}

enterButton.addEventListener("click", addListAfterClick);

inputField.addEventListener("keypress", addListAfterKeypress);