function init(lang)
{

	let row=20;
	let cols=50;
	document.write("<h1>jTx</h1>"+
	"<h3>paste your code bellow and switch what lang's gonna convert to</h3>"+
	"<textarea id='codejtxFROM' rows='"+row+"' cols='"+cols+"' placeholder='JS code here...'>"+
	"</textarea>"+
	"<textarea id='codejtxTO' rows='"+row+"' cols='"+cols+"' placeholder='"+lang+" Code here...' readonly>"+
	"</textarea>"+
	"<br>"+
	"<button onclick=jtx('"+lang+"')>convert TO:"+lang+"</button>"
	);
}

function jtx(lang) 
{
	let newS=document.getElementById("codejtxFROM").value;
	let tag=
	{
		"js":[/document.write/gi,/let/gi,/var/gi,/function/],
		"bash":["echo"],
		"batch":["echo"],
		"c":["printf","string","string","function"],
		"c++":["stdout"],
		"cmd":["echo"],
		"huskel":[],
		"java":["system.out.println","String","String","public void"],
		"jsp":["system.out"],
		"kotlen":[],
		"php":["echo","\$","\$","function"],
		"python":["print","def","def","def"],


	};
	let tgs=Object.keys(tag).length;
	for(let i=0;i<tag[lang].length;++i)
	{
		newS=newS.replace(tag["js"][i],tag[lang][i]);
		//newS=newS.replace(" ","")
	}
	document.getElementById("codejtxTO").value=newS;
}


function button(argument)
 {
	link=argument;
	for(let i=0;i<link.length;++i)
		document.write("<br>"+"<button>"+"<a href='"+link[i]+"' style='text-decoration:none' target='_blank'> "+link[i]+"</a>"+"</button>");
}


function compiler(lang) 
{
	let link={
		"php":["https://www.writephponline.com/","https://onecompiler.com/php/42x5ab9pq","https://www.w3schools.com/php/phptryit.asp?filename=tryphp_compiler"],
		"java":["https://replit.com/languages/java10","https://onecompiler.com/java","https://www.onlinegdb.com/online_java_compiler","https://www.w3schools.com/java/tryjava.asp?filename=demo_compiler"],
	};
	document.write("<h2>"+"Try "+lang+" Compiler");
	for(let i=0;i<link[lang].length;++i)
		document.write("<br>"+"<button>"+"<a href='"+link[lang][i]+"' style='text-decoration:none;text-font:Arial;' target='_blank'> "+link[lang][i]+"</a>"+"</button>");
}