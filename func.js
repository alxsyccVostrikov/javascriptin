function file()
{
  let filename="func.js";
  document.write("from ''"+filename+"<br>");
} 

function tab(times=1)
{
	let t=" ";
	for(let i=1;i<=times;i++)
	{
		t+=" ";
	}

	return t;
}

function isDecimal(char)
{
	let pattern = /\d\.\d/;
	
	if(pattern.test(char)==true)
	{
		return true;
	}
}

function isINT(char)
{
	let pattern = /[0-9]/;
	
	if(pattern.test(char)==true)
	{
		return true;
	}
    else
    {
    	return false;
    }
}


function findx(variable,char)
{
	for(let i in variable)
    	if(variable[i]==char)
        {
        	return true
        }
        else
        {
        	return false;
        }
}

function TypeOfVar(char)
{
	if(isDecimal(char) == true )
		return "decimal";
	else if(isINT(char) == true)
		return "int";
	else if(typeof char == "string" && char.length == 1 )
		return "char";
	else if(typeof char == "string")
		return "string";
}


function fori(param,opt="") 
{
	if(typeof param == "number")
		param=param.toString();
	//param=param.toString();
	let lp=param.length-1 || Object.keys(param).length-1;
	let count=0;
	let ar=[];
	for(let i in param)
	    	if(i==lp || count==lp)
	        {
	    			document.write(param[i]);
	       		ar.push(param[i]);
	       	}
	       else
	       {
	        	document.write(param[i]+opt);
	        	ar.push(param[i]);
	        ++count;
	        }
	return ar;
}



function cleanWord(string)
{
	let a=/[áÁàÀâÂäÄãÃ]/gi;
	let e=/[éÉèÈêÊëË]/gi;
	let i=/[íÍìÌïÏîÎ]/gi;
	let o=/[óÓõÕöÖôô]/gi;
	let u=/[úÚùÙüÜûÛ]/gi;
	
	let digit=/[0-9]/gi;
	let special=/[\!\@\#\$\%\¨\&\*\(\)\_\-\+\=\`\´\{\\\[\}\]\^\~\|\,\.\:\;\/\?]/gi;
	
	regex=
	{
	"a":a,
	"e":e,
	"i":i,
	"o":o,
	"u":u,
	};
	
	let cw="";
	cw=string;
	for(let i in regex)
		cw=cw.replace(regex[i],i);
	return cw;
}


function getFields(obj)
{
	let ar=[];
	for(let i in obj)
	{
		ar.push(i);
	}
	return ar;
}


function irof(param,opt="")
{
	if(typeof param=="number")
	param=param.toString();
	let lp=param.length-1 || Object.keys(param).length-1;
	let count=lp;
	let i=0;
	let ar=[];
	while(lp>=i)
	{	
		if(typeof param=="object")
		{
	  	let array=getFields(param);
	     if(lp==i)
	     {
	     	document.write(param[array[lp]]);
	     	ar.push(param[array[lp]]);
	     }
	     else
	     {
	     	document.write(param[array[lp]]+opt);
	     	ar.push(param[array[lp]])
	     }
		}
	  else
	  {
	  	if(lp==i)
	    {
	   		document.write(param[lp]);
	   		ar.push(param[lp]);
	    }
	    else
	    {
	     	document.write(param[lp]+opt);
	     	ar.push(param[lp]);
	    }
		}
	  --lp;
	  --count;
	}
	return ar;
}


function getFieldByIndex(obj,index)
{
	let array=[];
	for(let i in obj)
	array.push(i);
	return array[index];
}


function charToTag(char)
{
	if(char=="\n")
{
	return "<br>";
}
else
{
	return char;
} 

}

function reverse(whatever,size,opt="")
{

let index=0;
let field=[];
let s=(size==undefined?Object.keys(whatever).length:size);
opt=charToTag(opt);
for(let i in whatever)
{
field[index]=i;
++index;
}

//let v=(s<=field.length-1?s:s-1);
let v=(s>field.length-1?s-1:s);
if(v==0)
{
	document.write(whatever[field[v]]);
	return;
}
else
{
	document.write(whatever[field[v]]+opt);
	--v;
}
	return reverse(whatever,v);
}


