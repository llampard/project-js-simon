let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  var myMusic = document.getElementById('music');
  myMusic.play();
  alert('You clicked the green button');
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  alert('You clicked the red button');
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  alert('You clicked the yellow button');
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  alert('You clicked the blue button');
});


function PlaySound(){
  alert("hello");
  let nobody = new audio();
  nobody.src = "nobody.mp3";
  document.querySelector("#nobody");
  nobody.Play();
}
}

