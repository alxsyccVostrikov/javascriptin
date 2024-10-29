var email={
	"email":["gmail.com","outlook.com","yandex.ru","tutanota.de","protonmail.com","yahoo.com"],
	"inbox":["https://mail.yandex.com/?uid=869376094#compose"],
	//,"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+person["email"]+"&su=DenunciaAnimale&body=my-text&ui=2&tf=1&pli=1"
};
var subject="";
var choice="";
var emailPatterm=/\w+\@+\w+\.[aA-zZ]{2,4}$/;
//var emailPatterm=/[0-9]$/;
var data={
	"email":[],
	"password":[],
};




function fillUOUT(id_EMAIL,id_PASSWORD)
{

	document.getElementById(id_EMAIL).value(data["email"][0]);
	document.getElementById(id_EMAIL).value(data["email"][0]);
}

function saveData(email,password)
{

	data["email"].push(email);
	data["password"].push(password);

}


function emailProviderIdentifier(domain)
{
	let field="email";
	for(let i in email[field])
		if(email[field][i].match(domain)||domain.match(email[field][i]))
			return email[field][i];
}


function randomEmailAdressFrom(domain)
{
	var randomString = Math.random().toString(36).substring(2);
	var email = randomString + "@" + domain;
	return email;
}



function randomPAssowrd()
{
	let password="";
	for(let i=0;i<=4;++i)
		password+=Math.random().toString(36).slice(-8);
	return password;
}

function isaValidEmail(email)
{
	if(email.match(emailPatterm))
		return true;
	else
		return false;
}


function openMailBox(domain)
{
	let field="inbox";
	for(let i in email[field])
		if(email[field][i].match(domain)||domain.match(email[field][i]))
			return email[field][i];

}



