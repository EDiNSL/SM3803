var data = new RiMarkov(4, 1, 1);

var te = '';

$.ajax({
    url:'statements.txt',
    success: function (data){
      te = JSON.stringify(data);
      console.log(te);
      start();
    }
  });


function start() {

var randColour;
difficulty("easy");

var rs = new RiString(te);
console.log(rs.length());

data.loadText(te);

console.log(data.getCompletions("rioters"));

round();
document.getElementById("inputText").addEventListener('keyup', check);
document.getElementById("passToInterpreter").addEventListener('click', interpreter);
document.getElementById("guess").addEventListener('click', guess);

// round();

var rR, gR, bR;
function round() {
  broker();
}

function broker() {
  document.getElementById("passToInterpreter").style.display = "block";
  document.getElementById("inputText").style.display = "block";
  document.getElementById("colourSelect").style.display = "none";
  document.getElementById("guess").style.display = "none";
  document.getElementById("randColour").style.display = "block";
}

function interpreter() {
  console.log("yeet");
  document.getElementById("passToInterpreter").style.display = "none";
  document.getElementById("inputText").style.display = "none";
  document.getElementById("colourSelect").style.display = "block";
  document.getElementById("guess").style.display = "block";
  document.getElementById("randColour").style.display = "none";
}

function guess() {
  if (true) {
    correct();
  } else {
    wrong();
  }
}

function getColour() {
  console.log(this.id);
}

function correct() {
  round();
}

function wrong() {
  if (true) {
    end();
  }
}

function end(){

}

function check() {
  var input = document.getElementById("inputText").value;
  console.log(input);
  document.getElementById("t").innerHTML = input;
}

function difficulty(lvl) {

  if (lvl == "easy") {
    var size = 8;
    var str;
    str = "<table id=\"table\">";
      str+= "<tr>";
      for (var j = 0; j < size; j++) {
        var n = j;
        str+= "<td id=\"" + n +"\" onclick=\"console.log(\"yeet\")\"></td>";
      }
      str+= "</tr>";
    str+= "</table>";
    document.getElementById('colourSelect').innerHTML = str;

    document.getElementById(0).style.backgroundColor = "rgb(255, 0, 0)";
    document.getElementById(1).style.backgroundColor = "rgb(255, 255, 0)";
    document.getElementById(2).style.backgroundColor = "rgb(0, 255, 0)";
    document.getElementById(3).style.backgroundColor = "rgb(0, 255, 255)";
    document.getElementById(4).style.backgroundColor = "rgb(0, 0, 255)";
    document.getElementById(5).style.backgroundColor = "rgb(255, 0, 255)";
    document.getElementById(6).style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById(7).style.backgroundColor = "rgb(0, 0, 0)";


    document.getElementById(0).addEventListener('click', getColour);
    document.getElementById(1).addEventListener('click', getColour);
  }

  if (lvl == "hard") {
    var size = 6;
    var str;
    // var iR = Math.floor(Math.random()*(size/2));
    // var jR = Math.floor(Math.random()*(size+1));

    str = "<table id=\"table\">";
    for (var i = 0; i < size/2; i++) {
      str+= "<tr>";
      for (var j = 0; j < size + 1; j++) {
        var n = i*1000+j;
        str+= "<td id=\"" + n +"\"></td>";
      }
      str+= "</tr>";
    }
    str+= "</table>";
    document.getElementById('colourSelect').innerHTML = str;
    var r, g, b;

    for (var i = 0; i < size + 1; i++){
      for (var j = 0; j < size/2; j++){
        m = i%Math.floor(size/6);
        d = size/6;
        s = Math.floor(size/2);

        if (i<size/6) {
          r = 255;
          g = m*255/d + j*(255-m*255/d)/s;
          b = j*255/s;

        } else if (i<size*2/6) {
          g = 255;
          r = 255 - m*255/4 + j*(m*255/d)/s;
          b = j*255/s;

        } else if (i<size*3/6) {
          g = 255;
          b = m*255/d + j*(255-m*255/d)/s;
          r = j*255/s;

        } else if (i<size*4/6) {
          b = 255;
          g = 255 - m*255/4 + j*(m*255/d)/s;
          r = j*255/s;

        } else if (i<size*5/6) {
          b = 255;
          r = m*255/d + j*(255-m*255/d)/s;
          g = j*255/s;

        } else if (i != size){
          r = 255;
          b = 255 - m*255/4 + j*(m*255/d)/s;
          g = j*255/s;
        } else {
          r = j*255/(s-1);
          g = r;
          b = r;
          console.log(r, g, b);
        }

        var n = j*1000+i;
        document.getElementById(n).style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      }
    }
  }
}

// function yoink() {
// var yeet = document.getElementById(1).style.backgroundColor;
// yeet = JSON.stringify(yeet);
// console.log(yeet);
// }

}
