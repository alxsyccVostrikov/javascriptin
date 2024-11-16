let tag=
{
	"js":
	[
		/document.write/gi,
		/let/gi,
		/var/gi,
		/function/
	],
	"bash":
	[
		"echo"
	],
	"batch":
	[
		"echo"
	],
	"c":
	[
		"printf","string","string","function"
	],
	"c++":
	[
		"stdout"
	],
	"cmd":
	[
		"echo"
	],
	"huskel":
	[
	],
	"java":
	[
		"system.out.println",
		"String",
		"String",
		"public void"
	],
	"jsp":
	[
		"system.out"
	],
	"kotlen":
	[
	],
	"php":
	[
		"echo",
		"\$",
		"\$",
		"function"
	],
	"python":
	[
		"print",
		"def",
		"def",
		"def"
	],
};

	
let link=
{
	"php":
	[
		"https://www.writephponline.com/",
		"https://onecompiler.com/php/42x5ab9pq",
		"https://www.w3schools.com/php/phptryit.asp?filename=tryphp_compiler"
	],
	"java":
	[
		"https://replit.com/languages/java10",
		"https://onecompiler.com/java",
		"https://www.onlinegdb.com/online_java_compiler",
		"https://www.w3schools.com/java/tryjava.asp?filename=demo_compiler"
	],
};

let lang="php";


/*
	ONCHANGE event,...it changes h4[link] values from lang's choice 
*/

function optionLang_function()
 {

	lang=document.getElementById('optionLang').value;
	document.getElementById('btn_Lang').innerHTML="convert TO:"+lang;
	document.getElementById('h2_lang').innerHTML="Try "+lang+" compiler";
	const div = document.querySelector("h4");
	div.innerHTML ="";
		
	for(let i=0;i<link[lang].length;++i)
	{
		div.innerHTML+="<button>"+"<a href='"+link[lang][i]+"' style='text-decoration:none;text-font:Arial;' target='_blank' id=href_"+i+"> "+link[lang][i]+"</a>"+"</button>"+"<br>";
	}

}

/*
step one of project...MAIN,initialization!
*/
function init(chosen=lang)
{
	let row=20;
	let cols=50;
	document.write("<h1>jTx</h1>"+
	"<h3>paste your code bellow and switch what lang's gonna convert to<select id='optionLang' onchange='optionLang_function()'");
	for(let i in tag)
	{
		if(i==chosen)
		{
			document.write("<option id='"+i+"_opt' selected>"+i+"</option>");
		}
		else
		{
			document.write("<option id='"+i+"_opt'>"+i+"</option>");
		}
	}
	document.write("</select></h3>"+
	"<textarea id='codejtxFROM' rows='"+row+"' cols='"+cols+"' placeholder='JS code here...'>"+
	"</textarea>"+
	"<textarea id='codejtxTO' rows='"+row+"' cols='"+cols+"' placeholder='Coverted code here...' readonly>"+
	"</textarea>"+
	"<br>"+
	"<button onclick=jtx('"+chosen+"') id='btn_Lang'>convert TO:"+chosen+"</button>"
	);
}



/*
Function to converter a lang to the other
*/
function jtx(chosen=lang) 
{
	let newS=document.getElementById("codejtxFROM").value;
	
	let tgs=Object.keys(tag).length;
	for(let i=0;i<tag[chosen].length;++i)
	{
		newS=newS.replace(tag["js"][i],tag[chosen][i]);
		//newS=newS.replace(" ","")
	}
	document.getElementById("codejtxTO").value=newS;
}


/*
print a list of online compiler for a lang determined
*/
function compiler(chosen=lang) 
{
	let string="";
	string+="<h2 id='h2_lang'>"+"Try "+chosen+" Compiler";
	string+="<h4 id='h2'>";
	for(let i=0;i<link[chosen].length;++i)
	{
		string+="<button>"+"<a href='"+link[chosen][i]+"' style='text-decoration:none;text-font:Arial;' target='_blank' id=href_"+i+"> "+link[chosen][i]+"</a>"+"</button>"+"<br>";
	}
	string+="</h4>";
	document.write(string);


}
