var simbols_obj={
	"65": "A",    
	"66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
	"71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
	"76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
	"81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
	"86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
	"91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
	"96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
	"101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
	"106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
	"111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
	"116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
	"121": "y",    "122": "z"
}

	var simbols_ar=[
	["65=A","66=B","67=C","68=D","69=E","70=F"],    
	["71=G","72=H","73=I","74=J","75=K"],    
	["76=L","77=M","78=N","79=O","80=P"],    
	["81=Q","82=R","83=S","84=T","85=U"],    
	["86=V","87=W","88=X","89=Y","90=Z"],    
	["91=[","92=\\","93=]","94=^","95=_"],    
	["96=`","97=a","98=b","99=c","100=d"],    
	["101=e","102=f","103=g","104=h","105=i"],    
	["106=j","107=k","108=l","109=m","110=n"],    
	["111=o","112=p","113=q","114=r","115=s"],    
	["116=t","117=u","118=v","119=w","120=x"],    
	["121=y","122=z"]
]

/*
----------------------------------------------------------------------------------------------
--- draw ascc table 
---
*/

/*
Code...

drawAscii();
*/

/*
result...

_____________________________
|_a_|_65_|___|___|__|___|___|
|_b_|_66_|__|___|___|__|____|
|_c__|_67_|__|__|___|___|___|
|_d__|_68_|___|__|___|__|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
*/
drawAscii = function()
{
var ascii={
	"31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
	"36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
	"41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
	"46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
	"51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
	"56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
	"61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
	"66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
	"71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
	"76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
	"81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
	"86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
	"91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
	"96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
	"101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
	"106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
	"111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
	"116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
	"121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
	"126": "~",    "127": ""
	}
	return ascii;
}


/*
----------------------------------------------------------------------------------------------
--- draw ascc table 
---
*/

/*
Code...

drawAscTableFromObj();
*/

/*
result...

_____________________________
|_a_|_65_|___|___|__|___|___|
|_b_|_66_|__|___|___|__|____|
|_c__|_67_|__|__|___|___|___|
|_d__|_68_|___|__|___|__|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
*/

function drawAscTableFromObj()
{
	let s="=";
	let e=",";
	let x=0,y=6;
	document.write("<style>table,td {border:1px solid black;}</style>");
	document.write("<table style='width:10%'>");
	let obj=Object.keys(simbols_obj).length
			document.write("<tr>");
			for(let i in simbols_obj)
		{
			if(x==y)
			{
				document.write("</tr>");
				document.write("<td>"+i+s+simbols_obj[i]+e+"</td>");
					//document.write("</br>");
				//	document.write("<tr>");
			
			y+=5;
			}
			else if(simbols_obj[i]=="z")
			{
			document.write("<td>"+i+s+simbols_obj[i]+"</td>");
				break;	
			}
			else
			{
				document.write("<td>"+i+s+simbols_obj[i]+e+"</td>");
				++x;
			}

		}
		document.write("</table>");

}


/*
----------------------------------------------------------------------------------------------
--- draw ascc table 
---
*/

/*
Code...

drawAscTableFromAR();
*/

/*
result...

_____________________________
|_a_|_65_|___|___|__|___|___|
|_b_|_66_|__|___|___|__|____|
|_c__|_67_|__|__|___|___|___|
|_d__|_68_|___|__|___|__|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
*/

function drawAscTableFromAR()
{
	let s="=";
	let e=",";
	let x=0,y=5;
	document.write("<style>table,td {border:1px solid black;}</style>");
	document.write("<table style='width:20%'>");
	 for(let i=0;i<simbols_ar.length;++i)
    {
    		document.write("<tr>");
    	
   		for(let j=0;j<simbols_ar[i].length;++j)
    		document.write("<td>"+simbols_ar[i][j]+"</td>");
    
    		document.write("</tr>");
    
    }
    document.write("</table>");
}

/*
convert number to asc code[character from a-z]
*/
function AtoI(i)
{ 
	return i.charCodeAt(0); 
}

/*
convert char to float]
*/
function AtoF(i)
{ 
	return Number.parseFloat(i.charCodeAt(0)); 
}

/*
convert number to asc code[character from a-z]
*/
function ItoA(i)
{
	return String.fromCharCode(i);
}



/*

/*
----------------------------------------------------------------------------------------------
--- draw ascc table 
---
*/

/*
Code...

drawAscTableFromAR();
*/

/*
result...

_____________________________
|_a_|_65_|___|___|__|___|___|
|_b_|_66_|__|___|___|__|____|
|_c__|_67_|__|__|___|___|___|
|_d__|_68_|___|__|___|__|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
|___|___|___|___|___|___|___|
*/
function AsciiTable()
{
	let x=0;
	let z=5;
	for(let i=65;i<123;++i)
	{
		if(x==z)
		{
	
			println(i+"="+String.fromCharCode(i)+tab());
			z+=5;
		}
		else
		{
			print(i+"="+String.fromCharCode(i)+tab());
		
		}
		++x;
	
	}
}
