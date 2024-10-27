var webpage="alx";
var person=
  {
    user:"alx",
    email:"alx",
  };
var pageMenu=
{
  "home.php":"home",
  "settings.php":"settings",
};

var subject="suggestion";
var url=[
  "https://www.facebook.com/"+webPage,
  "https://www.instagram.com/"+webPage,
  "https://mail.yandex.com/?uid=869376094#compose",
  "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+person["email"]+"&su="+subject+"&body=my-text&ui=2&tf=1&pli=1",
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

function CreatingMenuBar(path="./")
{
  document.write("<nav class='navbar navbar-inverse'>");
  document.write("<a class='navbar-brand' onclick='sms()'>"+webpage+"</a>");
  document.write("<ul class='nav navbar-nav'>");    
  for(let i in pageMenu)
    {
       document.write("<li><a href='"+i+"' style='text-decoration:none'>"+pageMenu[i]+"</a></li>");
    }
  document.write("</ul>");    

}




//message
function sms(path="./")
{
  let msg01="developed by";
  alert(msg01+":"+person["name"]+"\nemail:"+person["email"]);
}

