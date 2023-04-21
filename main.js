// -----------------  Calculator scripts  -----------------------//

//        ****************    Function add  ****************
function addInput() {
  var x1 = document.getElementById("in1").value;
  var x2 = document.getElementById("in2").value;
  var sumTotal = Number(x1) + Number(x2);

  if (isNaN(x1) || isNaN(x2)) {
    document.getElementById("output").style.color = "#ff0000";
    document.getElementById("output").innerHTML =
      "NaN, Wrong inputs, please ensure that both are numbers!";
  } else if (x1.length != 0 && x2.length != 0) {
    document.getElementById("output").style.color = "#0000ff";
    document.getElementById("output").innerText += sumTotal;
  } else {
    document.getElementById("output").style.color = "#fc7d4f";
    document.getElementById("output").innerHTML =
      "Empty input... Please enter 2 numbers !";
  }
}

//      *********************  function subtract   ***************

function subtractInput() {
  var x1 = document.getElementById("in1").value;
  var x2 = document.getElementById("in2").value;
  var sumTotal = Number(x1) - Number(x2);

  if (isNaN(x1) || isNaN(x2)) {
    document.getElementById("output").style.color = "#ff0000";
    document.getElementById("output").innerHTML =
      "NaN, Wrong inputs, please ensure that both are numbers!";
  } else if (x1.length != 0 && x2.length != 0) {
    document.getElementById("output").style.color = "0000ff";
    document.getElementById("output").innerText += sumTotal;
  } else {
    document.getElementById("output").style.color = "#fc7d4f";
    document.getElementById("output").innerHTML =
      "Empty input... Please enter 2 numbers !";
  }
}

//    **********************Function multiply  ***************************

function multiplyInput() {
  var x1 = document.getElementById("in1").value;
  var x2 = document.getElementById("in2").value;
  var mult = Number(x1) * Number(x2);
  if (isNaN(x1) || isNaN(x2)) {
    document.getElementById("output").style.color = "#ff0000";
    document.getElementById("output").innerHTML =
      "NaN, Wrong inputs, please ensure that both are numbers!";
  } else if (x1.length != 0 && x2.length != 0) {
    document.getElementById("output").style.color = "#0000ff";
    document.getElementById("output").innerHTML += mult;
  } else {
    document.getElementById("output").style.color = "#fc7d4f";
    document.getElementById("output").innerHTML =
      "Empty input... Please enter 2 numbers !";
  }
}

//    ******************   Function divide   *********************************
 
function divideInput() {
  var x1 = document.getElementById("in1").value;
  var x2 = document.getElementById("in2").value;
  var divide = Number(x1) / Number(x2);
  if (isNaN(x1) || isNaN(x2)) {
    document.getElementById("output").style.color = "#ff0000";
    document.getElementById("output").innerHTML =
      "NaN, Wrong inputs, please ensure that both are numbers!";
  } else if (x1.length != 0 && x2.length != 0) {
    document.getElementById("output").style.color = "#0000ff";
    document.getElementById("output").innerHTML += divide;
  } else {
    document.getElementById("output").style.color = "#fc7d4f";
    document.getElementById("output").innerHTML =
      "Empty input... Please enter 2 numbers !";
  }
}

//   *******************   Reset inputs    **********************************
function resetInput() {
  document.getElementById("in1").value = "";
  document.getElementById("in2").value = "";
  document.getElementById("output").innerHTML = "";
}

//  -----------------------------------  End Calk Script  ---------------------------//

//--------------  Numb Guess script  -------------------------//

var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 30) + 1;
var no_of_guesses = 0;
var attempt_nums = [];

function guess() {
  var user_guess = document.getElementById("guess").value;
  if (user_guess < 1 || user_guess > 30) {
    // alert("Please enter a number between 1 and 50.");
    document.getElementById("output1").style.color = "RED";
    document.getElementById("output1").innerHTML =
      "Hey, please input number between 1 and 30! " + " ......  Close  ";
  } else {
    attempt_nums.push(user_guess);
    no_of_guesses += 1;
    if (no_of_guesses > 5) {
      //alert("Game over! You did not guessed in 5 attempts!");
      document.getElementById("output1").style.color = "RED";
      document.getElementById("output1").innerHTML =
        " Game over ! You did not guessed in 5 attempts!";
    } else if (user_guess < answer) {
      msg1.textContent = "Your guess is too low.";
      msg2.textContent = "No. of attempts: " + no_of_guesses;
      msg3.textContent = "Guessed numbers are: " + attempt_nums;
    } else if (user_guess > answer) {
      msg1.textContent = "Your guess is too high.";
      msg2.textContent = "№ of guesses: " + no_of_guesses;
      msg3.textContent = "Guessed numbers are: " + attempt_nums;
    } else if (user_guess == answer) {
      msg1.textContent = "Hooray! You Win!";
      msg2.textContent = "The number was: " + answer;
      msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";
      document.getElementById("my_btn").disabled = true;
    }
  }
}

function play_again() {
  location.reload();
}

function clear_msg() {
  document.getElementById("output1").innerHTML = "";
  document.getElementById("guess").value = "";
}
