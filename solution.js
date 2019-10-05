//Luke McEvoy
//CS 146: HW 3
//I pledge my honor I have abided by the Stevens Honor System


var result = 0;
var currentOp = ""; 
var buffer = 0;
setDisplay("0");

/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   result = 0;
   currentOp = "";
   buffer = 0;
   setDisplay("0");
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   document.getElementById("output").innerHTML = str;     
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   var new_Node = document.createTextNode(num);
   var output = document.getElementById("output");
   if(result === 0 || result === "ERROR"){
      output.replaceChild(new_Node, output.childNodes[0]);
      result = (result * 10) + num;
   }
   else if(output.textContent <= 99999999 && output.textContent >= -999999999){
      output.appendChild(new_Node);
      result = (result * 10) + num;
   }
   else{
      output.innerHTML= 999999999;
   }
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   if(buffer == 0){
      buffer = result;
      result = 0;
      currentOp = op;
      setDisplay(0);
   }
   else{
      currentOp = op;
   }
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   if(currentOp == "+"){
      result = buffer + result;
   }
   else if(currentOp == "-"){
      result = buffer - result; 
   }
   else if(currentOp == "*"){
      result = buffer * result;
   }
   else{
      if (result != 0){
         result = buffer / result;
         result = Math.floor(result);
      }
      else{
         result = 0;
         output.innerHTML = "ERROR";
      }
   }
   if(output.innerHTML != "ERROR"){
      result = Math.max(Math.min(result,999999999),-999999999);
      output.innerHTML = result;
   }
   currentOp = "";
   buffer = 0;
}