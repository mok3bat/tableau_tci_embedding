let TabViz = document.getElementById("tableau-viz");

let userMark = parseInt(document.getElementById("userMark").value);

function checkMark() {
  // update userMark value from the new entry
  userMark = parseInt(document.getElementById("userMark").value);
  console.log(userMark);
  console.log("I'm in");
  if (isNaN(userMark) || userMark < 0) {
    alert("Please enter a valid score!");
  } else if (userMark >= 90) {
    alert("You Scored " + userMark + "\n you're hero!");
  } else if (userMark >= 80) {
    alert("You Scored " + userMark + "\n you passed");
  } else {
    alert("You Scored " + userMark + "\n you failed!");
  }
}
