

function sumNumber () {
  var number1 ,number2,max;
  
  
number1=parseInt(document.getElementById("number1").value);
number2= parseInt(document.getElementById("number2").value);
if(isNaN(number1) || isNaN(number2) )
{
	document.getElementById("max").innerHTML="empty input please try agin";
	return;
}
 if(number1>number2)
 max=number1;
 else
 max=number2;
 if(number1===number2)
 	max=number1;

document.getElementById("max").innerHTML="the max number:"+max;
 
}