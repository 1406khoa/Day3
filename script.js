const buttom = document.getElementById("start");

var getValue = function() {

    var number = document.getElementById("number").value;
    number++;
    if(number == 700){
      number =  0;
    }
    document.getElementById("number").value = number;
}

function start(){
  clear = setInterval(getValue, 1);

  buttom.disabled = true;
 
}

function stop(){
  clearInterval(clear);
  alert("The score is " + document.getElementById("number").value);
  document.getElementById("number").value = 0;
  buttom.disabled = false;
}
