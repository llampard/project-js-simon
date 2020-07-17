let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  var myMusic = document.getElementById('clip1');
  myMusic.play();
  document.getElementById("buttonClicks").innerHTML = "DOGE";
  //alert('You clicked the green button');
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  var myMusic = document.getElementById('clip2');
  myMusic.play();
  document.getElementById("buttonClicks").innerHTML = "Ain't Nobody Got Time for That!";
  //alert('You clicked the red button');
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  var myMusic = document.getElementById('clip3');
  myMusic.play();
  document.getElementById("buttonClicks").innerHTML = "I Like Turtles";
  //alert('You clicked the yellow button');
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  var myMusic = document.getElementById('clip4');
  myMusic.play();
  document.getElementById("buttonClicks").innerHTML = "When Java Doesn't Work";
  //alert('You clicked the blue button');
});

let header = document.getElementById("buttons");
let btns = header.getElementsByClassName("simon-button");
let countClicks = 0;
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mousedown", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    countClicks++;
    console.log(countClicks +" clicks");
    document.getElementById("clicks").innerHTML = countClicks;
  });
  btns[i].addEventListener("mouseup", function() {
    this.className = this.className.replace(" active", "");
  });
}
