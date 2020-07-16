

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function(){
  //alert("You clicked the green button");
}, false);


let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  //alert('You clicked the red button');
}, false);


let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  //alert('You clicked the yellow button');
}, false);


let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  //alert('You clicked the blue button');
}, false);


function mouseDown() {
  document.querySelector('.light-up').style.filter = "brightness(1.75)";
}

function mouseUp() {
  document.querySelector('.simon-button').style.filter = "brightness(1)";
}


