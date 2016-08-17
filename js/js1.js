

function sumNumber () {
  var number1 ,number2,max;
  
  
number1=parseInt(document.getElementById("number1").value);
number2= parseInt(document.getElementById("number2").value);

 if(number1>number2)
 max=number1;
 else
 max=number2;
 if(number1===number2)
 	max=number1;

document.getElementById("max").innerHTML="the max number:"+max;
 
}