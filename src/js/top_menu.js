   // JavaScript Document
   function dmenuhover()
   {
        if(!document.getElementById("top_menu"))
                return;
        var lis = document.getElementById("top_menu").getElementsByTagName("LI");
        for (var i=0;i<lis.length;i++)
        {
                lis[i].onmouseover=function(){this.className+=" jshover";}
                lis[i].onmouseout=function() {this.className=this.className.replace(new RegExp(" jshover\\b"), "");}
        }
    }
    if (window.attachEvent)
        window.attachEvent("onload", dmenuhover);

