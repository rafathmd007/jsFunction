

function sortNumbers () {
var num1,num2,num3,max,min;	
	
	num1=parseInt(document.getElementById("num1").value);
    num2= parseInt(document.getElementById("num2").value);
    num3= parseInt(document.getElementById("num3").value);
    if(isNaN(num1)|| isNaN(num2) || isNaN(num3))
    {
     document.getElementById("sort").innerHTML="empty input please try agin";
     return;
    }
    for(i=0;i<2;i++)
    {
    if(num1>num2)
    {
    	temp=num1;
    	num1=num2;
    	num2=temp;
    	
    }
    if(num2>num3)
    {
    	
    	temp=num2;
    	num2=num3;
    	num3=temp;
    }
    
    
   } 
   document.getElementById("sort").innerHTML="number 1:" + num1 +"\n " + " number 2:"+ num2 + "\n" + "number 3:" + num3;
    
}