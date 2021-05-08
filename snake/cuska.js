function Array2D(x, y) {
    var array2D = new Array(x);

    for(var i = 0; i < array2D.length; i++)
    {
        array2D[i] = new Array(y);
    }

    return array2D;
};

var lauks = document.getElementById('lauks');

var map = Array2D(10, 10);

// first loop
for(var i=0;i<10;i++) {
  for(var j=0;j<10;j++) {
    lauks.innerHTML += '<span class="field" id="field-'+i+'-'+j+'" m="'+i+'" n="'+j+'"></span>';
  };
  lauks.innerHTML += '<br/>';
};
// global objects
var head = {
  x: 5,
  y: 5
};
var tail = [];

// actions
var move = function() {
  // get random directions to x, y asis
  var directionX = Math.floor(Math.random() * 2);
  var directionY = Math.floor(Math.random() * 2);

  var oneMove = {};
  if(directionX){
    if(directionY){
      oneMove = {
        x: (head.x + 1) % 10,
        y: head.y
      };
    }
    else {
      oneMove = {
        x: (head.x + 1) % 10,
        y: head.y
      };
    }
  }
  else {
    if(directionY){
      oneMove = {
        x: head.x,
        y: (head.y + 1) % 10
      };
    }
    else {
      oneMove = {
        x: head.x,
        y: (head.y + 1) % 10
      };
    }
  }
  tail.push(head);
  cutTail();
  head = oneMove;
  // console.log(tail);
  refresh();
};
var refresh = function () {
  for(var i  = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
      var fieldix = document.getElementById('field-'+i+'-'+j);

      fieldix.classList.remove("headix");
      fieldix.classList.remove("tailix");

      if(i == head.x && j == head.y) {
        fieldix.classList.add('headix');
      }

      for(var n = 0; n < tail.length; n++) {
        if(tail[n].x == i && tail[n].y == j) {
            fieldix.classList.add('tailix');
        }
      }
    };
  };
};
var cutTail = function () {
  var len = 5;
  while(tail.length > len) {
    tail.shift();
  }
}
// main loop
//for(var k = 0; k < 10000; k += 100) {
  setInterval('move()', 200);
//};
