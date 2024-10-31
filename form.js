var field_si=["email","password"];
var field_su=["email","password","date"];
var btn=["sign-ip","sign-up"];


function FormToPHP_get(path_phpFile)
{
	let idFORM="_idForm"+document.forms.length;
	document.write("<form action='"+path_phpFile+"' method='GET'>");
	for(let i in field_si)
		document.write("<input type='"+field_si[i]+"' id='"+field_si[i]+idFORM+"' placeholder='"+field_si[i]+"' '></input><br>");
	document.write("<button>"+btn[0]+"</button>");
	document.write("</form>");
	

}

function FormToPHP_post(path_phpFile)
{
	let idFORM="_idForm"+document.forms.length;
	document.write("<form action='"+path_phpFile+"' method='POST'>");
	for(let i in field_si)
		document.write("<input type='"+field_si[i]+"' id='"+field_si[i]+idFORM+"' placeholder='"+field_si[i]+"' '></input><br>");
	document.write("<button>"+btn[0]+"</button>");
	document.write("</form>");
	

}




//-------------------SIGNUUP


function signup()
{
	let idFORM="_idForm"+document.forms.length;
	for(let i in field_su)
	document.write("<input type='"+field_su[i]+"' id='"+field_su[i]+"' placeholder='"+field_su[i]+"' '></input><br>");
	document.write("<button>"+btn[1]+"</button>");


}

