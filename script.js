var containerEle = document.body.querySelector(".container");
var num1= prompt("Enter a number");
if(num1==isNaN()){
  containerEle.innerHTML= num1
}else{
  containerEle.innerHTML="Error"
}
var operator =prompt("Enter an operator: either +,-,*, or /");

var num2= prompt("Enter another number");
if(num2==isNaN()){
  containerEle.innerHTML= num2
}else{
  containerEle.innerHTML="Error"
}
var result;

if(operator== '+'){
  result= Number(num1) + Number(num2);
}

else if(operator== '-'){
  result = num1-num2;
}
else if(operator == '*'){
  result = num1*num2;
}
else if(operator == '/'){
  result= num1/num2;
}
containerEle.innerHTML= "The answer is " +result;