

var textOnMouseOver=function(ClassName,styleName)
{
var item = document.getElementById(ClassName);
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{   
   document.getElementById(styleName).setAttribute("style", "display:inline-block; z-index=1; margin-left:-77px;");
}

function func1()
{  
    document.getElementById(styleName).setAttribute("style", "display:none;");
}
};
