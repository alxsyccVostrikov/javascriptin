var webpage="alx";
var person=
  {
    user:"alx",
    email:"alx",
  };
var glyphicon=
[
  ["signup.php","user","sign-in"],
  ["signin.php","log-in","log-in"],
];

var url=[
  "https://www.facebook.com/"+webPage,
  "https://www.instagram.com/"+webPage,
  "https://mail.yandex.com/?uid=869376094#compose",
  "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+person["email"]+"&su=DenunciaAnimale&body=my-text&ui=2&tf=1&pli=1",
  "https://web.telegram.org",
  "https://www.skype.com",
  "https://chat.whatsapp.com/a"+webPage,
  "https://www.patreon.com/"+webPage,
  "https://www.bitcoin.com/",
  "https://www.paypal.com/"+webPage,
  "https://www.mercadopago.com.br/"+webPage,
  "https://pagseguro.uol.com.br/"+webPage,
  "https://www.visa.com/"+webPage,
  "https://www.bradesco.com/"+webPage,
  "https://www.itau.com/"+webPage,
  "http://www.twitter.com/"+webPage
  ];

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

