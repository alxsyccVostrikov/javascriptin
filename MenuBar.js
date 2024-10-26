
function CreatingMe(path="./")
{
  for(let i=0;i<page.length;i++)
    document.write("<li><a href='"+path+page[i]+"'>"+pageName[i]+"</a></li>");  
}

function CreatingMd(path="./")
{
  for(let i=0;i<glyphicon.length;i++)
    document.write("<li><a href='"+path+glyphicon[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphiconName[i]+"</a></li>");
}


function Me(path="./")
{
  document.write("<nav class='navbar navbar-inverse'>");
    document.write("<a class='navbar-brand' onclick='sms()'>"+webpage+"</a>");
      document.write("<ul class='nav navbar-nav'>");    
      for(let i=0;i<page.length;i++)
        document.write("<li><a href='"+path+page[i]+"'>"+pageName[i]+"</a></li>");
      document.write("</ul>");    
}

function creatinME(path="./")
{
  for(let i=0;i<page.length;i++)
    document.write("<li><a href='"+path+page[i]+"'>"+pageName[i]+"</a></li>");   

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
    document.write("<li><a href='"+path+glyphicon[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphiconName[i]+"</a></li>");
  document.write("</ul>");
  document.write("</nav>");

}

function CriarMenuDir(path="./")
{
  for(let i=0;i<glyphicon.length;i++)
    document.write("<li><a href='"+path+glyphicon[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphiconName[i]+"</a></li>");       //document.write("</ul></nav>");
}          
  
//creatin menu
function CriarMenu()
{
 //Me();
  CriarMenuEsq();
 // Md();
 CriarMenuDir();
}
//CriarMenu();


function tst(path="./")
{
  document.write("<nav class='navbar navbar-inverse'>");
  document.write("<a class='navbar-brand' onclick='sms()'>"+webpage+"</a>");
  document.write("<ul class='nav navbar-nav'>");    
  for(let i=0;i<page.length;i++)
  {
    document.write("<li>");
    document.write("<a href='"+path+page[i]+"'>"+page[i]);
    document.write("</a></li>");
  }
  document.write("</ul>");    
  document.write("<ul class='nav navbar-nav navbar-right'>");
  for(let i=0;i<glyphicon.length;i++)
  {
    document.write("<li><a href='"+path+glyphicon[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphiconName[i]+"</a></li>");
  }
  document.write("</ul>");
  document.write("</nav>");
}