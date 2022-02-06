    //This fuction clears values
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // This function displays values
function display(value) {
    document.getElementById("result").value += value;

}
   // This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    document.getElementById("result2").value = q;
   }

function ClearScreen2() {
    document.getElementById("result2").value = "";
   }
function Evaluator(){
    var q = document.getElementById("result").value;
    var p = parseInt(q)
    if (Math.sign(q) == 1){
        document.getElementById("result2").value = "This is a positive number";
    }else if (Math.sign(q) == -1){
        document.getElementById("result2").value = "This is a negative number";
    }else if (Math.sign(q) == 0){
        document.getElementById("result2").value = "This is zero";
    }else{
        document.getElementById("result2").value = "Error!!!";
    }
}
   
function loopTask1(){
    let userIntput = prompt("Enter words:")
    let myString = "";
    for (let i =0; i <userIntput.length; i ++){
        myString += i + "." + userIntput + "\n";
    }
    alert(myString);
} 

