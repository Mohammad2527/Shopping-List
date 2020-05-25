
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
  return input.value.length;
};

function createListElement(){
  var li = document.createElement("li");
  // creating li item
  li.appendChild(document.createTextNode(input.value));
  // adding text node to li
  ul.appendChild(li);
  // adding li with text node to ul list
  input.value = "";
  // seting input value to blank once item is listed
}

function addListAfterClick(){
      if(inputLength() > 0){
      // confirming that input have some value and not adding empty item
      createListElement();
}
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
      // event.keycode allows to add item by keypress, keycode 13 is for enter key
      createListElement();  // seting input value to blank once item is listed
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
