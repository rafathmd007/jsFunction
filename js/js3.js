

var howCharInWord=function(){
	
	
var word=(document.getElementById("word").value).toLowerCase();
var charIn= (document.getElementById("charIn").value).toLowerCase();
var count=0;
if(word=== "" || charIn === "")
{
 document.getElementById("howChar").innerHTML="empty input please try agin";
 return;
}
for (var i=0; i < word.length; i++) {
 {
 if(charIn===word[i])
 	count++;
 }
 if (count)
   document.getElementById("howChar").innerHTML= charIn +" "+ "appears in"+ " " + word + " "+ count +" " +"times";
 
 else
 document.getElementById("howChar").innerHTML=charIn +" "+ " does not appears in"+ " " + word ;
};

	
};
