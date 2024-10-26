
function CreatingMe(path="./")
{
  document.write("<nav class='navbar navbar-inverse'>");
  document.write("<a class='navbar-brand' onclick='sms()'>"+webpage+"</a>");
  document.write("<ul class='nav navbar-nav'>");    
  for(let i=0;i<page.length;i++)
  {
    document.write("<li><a href='"+path+page[i]+"'>"+page[i]+"</a></li>");  
    document.write("<li><a href='"+path+glyphicon[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphicon[i]+"</a></li>");
  }
  document.write("</ul>");    

}




//message
function sms(path="./")
{
  let msg01="developed by";
  alert(msg01+":"+person["name"]+"\nemail:"+person["email"]);
}



function Md(path="./")
{
  document.write("<ul class='nav navbar-nav navbar-right'>");
  for(let i=0;i<glyphicon.length;i++)
    document.write("<li><a href='"+path+glyphicon[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphicon[i]+"</a></li>");
  document.write("</ul>");
  document.write("</nav>");

}

