function init(lang)
{
	document.write("jTx<br>"+
				"paste your code bellow and switch what lang's gonna convert to"+
				"<br>"+
				"<textarea id='codejtxFROM'>"+
				"</textarea>"+
				"<textarea id='codejtxTO'>"+
				"</textarea>"+
				"<br>"+
				"<button onclick=jtx('"+lang+"')>convert TO</button>"
				);
}

function jtx(lang) 
{
	let newS=document.getElementById("codejtxFROM").value;
	let tag=
	{
		"js":[/document.write/gi,/let/gi,/var/gi],
		"php":["echo","\$","\$"],
	};
	let tgs=Object.keys(tag).length;
	
	switch(lang)
	{
		case "php":
			for(let i=0;i<tgs;++i)
			{
				newS=newS.replace(tag["js"][i],tag["php"][i]);
				//newS=newS.replace(" ","")
				//.replace("\;","<br>");
			}
			document.getElementById("codejtxTO").value=newS;
		break;
	}
	
}


function button(argument)
 {
	link=argument;
	for(let i=0;i<link.length;++i)
		document.write("<br>"+"<button>"+"<a href='"+link[i]+"' style='text-decoration:none' target='_blank'> "+link[i]+"</a>"+"</button>");
}


function compiler() 
{
	let link=[
		"https://www.writephponline.com/",
		"https://onecompiler.com/php/42x5ab9pq",
		"https://www.w3schools.com/php/phptryit.asp?filename=tryphp_compiler"
		];
	document.write("<h2>"+"<br>"+"Try PhpOnline Compiler");
	for(let i=0;i<link.length;++i)
		document.write("<br>"+"<button>"+"<a href='"+link[i]+"' style='text-decoration:none' target='_blank'> "+link[i]+"</a>"+"</button>");
	document.write("</h2>");
}