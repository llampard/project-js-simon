

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function(){
  //alert("You clicked the green button");
});



let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  //alert('You clicked the red button');
});


let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  //alert('You clicked the yellow button');
});


let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  //alert('You clicked the blue button');
});


// NOTE:This section uses the '.simon-container' class, when you use this 
//      ALL 4 boxes light up when the area is clicked
function mouseDown() {
  document.querySelector('.simon-container').style.filter = "brightness(1.8)";
 }
 
 function mouseUp() {
   document.querySelector('.simon-container').style.filter = "brightness(1)";
 }

 

 // HOWEVER, I attempted to fix it with the .simon-button class, and for some reason,
 // only the green square lights up....  ???? IDK what that is all about...


// function mouseDown() {
//  document.querySelector('.simon-button').style.filter = "brightness(1.8)";
// }

// function mouseUp() {
//   document.querySelector('.simon-button').style.filter = "brightness(1)";
// }


