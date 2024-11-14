/*
----------------------------------------------------------------------------------------------
---bubble sort and return a sorted array 
original array is modified and new array too

two sorted array
*/

/*
Code...
let ar=[e,f,d,c,a,b];
let ar02=[];

ar02=bubbleSort(ar);
*/

/*
result...
ar=[a,b,c,d,e,f];
ar02=[a,b,c,d,e,f];

*/

function bubbleSort(array) 
{
  let temp=""; 
  
  for(i=0;i<array.length;i++)
  {
    for(j=0;j<array.length;j++)
    {
      if(array[j]>array[i])
      {
        temp=array[j];
        array[j]=array[i];
        array[i]=temp;
      }
        
    }
  }
  return array;
}


/*
----------------------------------------------------------------------------------------------
---return backuped up original array  and modify struture of the 1st array 
---
*/

/*
Code...
let ar=[e,f,d,c,a,b];
let ar02=[];

ar02=keepArrayFromBubbleSort(ar);
*/

/*
result...
ar=[a,b,c,d,e,f];
ar02=[e,f,d,c,a,b];

*/

function keepArrayFromBubbleSort(array)
{
	let arrayCopy=[...array];
	for(i=0;i<array.length;i++)
  {
    for(j=0;j<array.length;j++)
    {
      if(array[j]>array[i])
      {
        temp=array[j];
        array[j]=array[i];
        array[i]=temp;
      }
        
    }
  }
  
  return arrayCopy;

}

/*--------------------------------------------------------------------------------------------
---return sorted array and keep struture of the 1st array 
---
*/


/*
Code...
let ar=[e,f,d,c,a,b];
let ar02=[];

ar02=keepArrayFromBubbleSort(ar);
*/

/*
result...
ar=[e,f,d,c,a,b];
ar02=[a,b,c,d,e,f];
*/

function bubbleSortFrom(array)
{
	let arrayCopy=[...array];
	let arrayBCK=[...array];
	for(i=0;i<array.length;i++)
  {
    for(j=0;j<arrayBCK.length;j++)
    {
      if(arrayBCK[j]>arrayBCK[i])
      {
        temp=arrayBCK[j];
        arrayBCK[j]=arrayBCK[i];
        arrayBCK[i]=temp;
      }
        
    }
    array=arrayCopy;
  }
  
  return arrayBCK;

}

/*--------------------------------------------------------------------------------------------
---bubble sort backward
---
*/
/*
Code...
let ar=[e,f,d,c,a,b];
let ar02=[];

ar02=backBubleSort(ar);
*/

/*
result...
ar=[f,e,d,c,b,a];
ar02=[f,e,d,c,b,a];

*/

function backBubleSort(array) 
{
  let temp=""; 
  
  for(i=0;i<array.length;i++)
  {
    for(j=0;j<array.length;j++)
    {
      if(array[j]<array[i])
      {
        temp=array[j];
        array[j]=array[i];
        array[i]=temp;
      }
        
    }
  }
  return array;
}


/*--------------------------------------------------------------------------------------------
---create tab
---
*/

function tab(times=1)
{
	let t=" ";
	for(let i=1;i<=times;i++)
	{
		t+=" ";
	}

	return t;
}


/*--------------------------------------------------------------------------------------------
---check if it's or not a Decimal number
---*/

/*
Code...

isDecimal("14.6")
isDecimal(14)
isDecimal(14.6)

*/

/*
result...

False
False
True
*/

/*
check typeOfChar()
*/

function isDecimal(char)
{

	
	if(pattern.test(char)==true)
	{
		return true;
	}
}


/*--------------------------------------------------------------------------------------------
---check if it's or not a INT
---
*/

/*
Code...
isDecimal("14.6")
isDecimal(14)
isDecimal(14.6)
*/

/*
result...

False
True
False
*/

/*
check typeOfChar()
*/

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


/*--------------------------------------------------------------------------------------------
---return if yes or false for a found char
---
*/

/*
Code...
let word="throughout"
findx(word,'a')
*/
/*
result...
false
*/

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


/*--------------------------------------------------------------------------------------------
---return which one is the type of
---
*/

/*
Code....

typeOfVar('x')
typeOfVar('dog')
typeOfVar(20)
typeOfVar(25.5)


*/
/*
result...
char
string
int
decimal
*/

function TypeOfVar(char)
{
	let dec = /\d\.\d/;
	let int = /[0-9]/;
	let c=	/[a-zA-z]/
	let string = /[a-zA-z]/;

	if(dec.test(char) == true && typeof char != "string"  )
		return "decimal";
	else if(int.test(char) == true && typeof char != "string")
		return "int";
	else if(c.test(char) == true && char.length == 1)
		return "char";
	else if(string.test(char) == true && char.length>1)
		return "string";
	else if(int.test(char) == true && typeof char == "string")
		return "string";
	else if(dec.test(char) == true && typeof char == "string")
		return "int";
	/*
	else if(typeof char == "string" && char.length == 1 )
		return "char";
	else if(typeof char == "string")
		return "string";
	*/
}



/*--------------------------------------------------------------------------------------------
---print and return array sorted values ahead,forEACH ,loop ahead,return array
---
*/

/*
Code...

array=['1','2','3','4','5'];
obj={'1':'1','2':'2','3':'3','4':'4','5':'5'}
fori(array,',')
fori(obj,'<br>')
*/

/*
result...
1,2,3,4,5

1
2
3
4
5
*/

function fori(param,opt="") 
{

	opt=charToTag(opt);

	if(typeof param == "number")
	{
		param=param.toString();
	}
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
	        	ar.push(param[i]+opt);
	        ++count;
	        }
	return ar;
}

/*
----------------------------------------------------------------------------------------------
---print and return array sorted values backward,foreach backward,fori backward
---
*/

/*
Code...

array=['5','4','3','2','1'];
obj={'5':'5','4':'4','3':'3','2':'2','1':'1'}
fori(array,',')
fori(obj,'<br>')
*/

/*
result...
5,4,3,2,1
5
4
3
2
1
*/

function irof(param,opt="")
{
	
	opt=charToTag(opt);
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

/*--------------------------------------------------------------------------------------------
---remove special chars from a word
---*/

/*
Code...
let word="alemânténóú";
*/

/*
result...

alemantenou

*/

function  cleanWord(word){
  return word
  .replace(/á|à|ã|â|ä|Á|À|Ã|Â|Ä/,"a")
  .replace(/é|è|ẽ|ê|ë|É|È|Ê|Ë/,"e")
  .replace(/í|ì|ĩ|î|ï|Í|Ì|Î|Ï/,"i")
  .replace(/ó|ò|õ|ô|ö|Ó|Ò|Õ|ö|Ó|Ò|Ô|Ö/,"o")
  .replace(/ú|ù|ũ|û|ü|Ú|Ù|ü/,"u")
  .replace(/ḉ|ç|Ç/,"c");
}

/*--------------------------------------------------------------------------------------------
---remove special chars from a word02
---*/

/*
Code...
let word="alípíóúa";
*/

/*
result...

alipioua

*/

function cleanWord02(string)
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

/*--------------------------------------------------------------------------------------------
---return array of fields from/of a obj
---
*/

/*
	let obj={"name":"alex",
			  "age":"25",
			  "sex":"male"
			};
	let ar=getFields(obj)
	for(let i in ar)
	document.write(ar[i]+"<br>");
	
*/

/*
name
age
sex
*/

function getFields(obj,opt)
{
	let ar=[];
	for(let i in obj)
	{
		ar.push(i);
	}
	return ar;
}



/*
get field of a obj from an index
*/
/*
Code...
let obj={"name":"alex",
			  "age":"25",
			  "sex":"male"
			};
	let field=getFieldByIndex(obj,1)
	document.write(field+"<br>");
*/

/*
result..
age
*/

function getFieldByIndex(obj,index)
{
	
	let p=0;
	let field="";
	for(let i in obj)
	{
		if(p==index)
		{
			field=i;
		}
		++p;
	}
	return field;
}

/*--------------------------------------------------------------------------------------------
---covert char to Tag
---
*/

/*
Code...
let opt=charToTag("\n")
document.write("a"+opt+"b");
*/

/*
result...
a
b
*/

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

/*--------------------------------------------------------------------------------------------
---print and return value backward without modifyin 1st array,structure legit one
---*/

/*
Code...

let obj={"name":"alex",
			  "age":"25",
			  "sex":"male"
			};
	let array=["name","age","sex","salary"];
	let n=5;
	let string="abcdef";	
	
	let array02=reverse(obj,",");
	for(let i in array02)
		document.write(array02[i]+"<br>")
	

*/

/*
//obj
name,age,sexsex
age
name

//array
name,age,sex,salarysalary
sex
age
name

//n
5,4,3,2,1,05
4
3
2
1
0

//string
f,e,d,c,b,af
e
d
c
b
a
*/


function reverse(/*whatever,size,opt=""*/...param)
{
	let whateverField=[];
	let tp=param.length;
	let whatever=param[tp-tp];
	opt=charToTag(param[tp-1]);
	let index=0;
	let field=[];

	for(let i in whatever)
		{
			field[index]=i;
			//whateverField.push(whatever[i])
			++index;
		}
	
	if(typeof whatever=="number")
	{
		let i=whatever;
		while(i>=0)
		{
			if(i==0)
			{
				document.write(i);			
			}
			else
			{
				document.write(i+opt);
			}
				
				whateverField.push(i);
			--i;
		}
		return whateverField;
	}
	else if(typeof whatever=="string")
	{
		let i=whatever.length-1;
		while(i>=0)
		{
			if(i==0)
			{
				document.write(whatever[i]);			
			}
			else
			{
				document.write(whatever[i]+opt);
			}
				
				whateverField.push(whatever[i]);
			--i;
		}
		return whateverField;
	}
	
	
	else if(whatever=="[object Object]")
	{
		let s=Object.keys(whatever).length-1
		let s1=0;	
		for(let i=s;i>=0;--i)
		{
			if(i==0)
			{
				whateverField.push(field[i]);	
				document.write(field[s1]);
			}
			else
			{
				whateverField.push(field[i]);
				document.write(field[s1++]+opt);
			}
		}
			return whateverField;
	
	}
	else
	{
		let s=whatever.length;
		let lp=whatever;
		let v=lp[s-1];
		let p="";
		if(typeof v=="number")
		{
			p=v;
			whatever.pop();
		}
		else
			{
				p=s-1;
			}
		
		let wt=whatever.length-1;
		if(p==0)
		{

			document.write(whatever[wt]);
			for(let i=whatever.length-1;i>=0;--i)
			{
				whateverField.push(whatever[i]);
			}
				return whateverField;
	
		}
		else
		{
			p-=wt;
			if(p<0)
			{
				document.write(whatever[p*-1]+opt);
			}
			else
			{
				document.write(whatever[p]+opt);
			}
			p+=wt;
			--p;
			whatever.push(p);
			return reverse(whatever,opt);	
		}
	}
}


/*
2-2=0
1-2=-1
0-2=-2
*/







	//--------------------------------------------------------------
	/*
	for(let i in whatever)
	{

		if(i==index-1)
		{
			whateverField.push(whatever[index-i-1]);
				document.write(whatever[i])
			
		}
		else
		{
			whateverField.push(whatever[index-i-1]);
			document.write(whatever[i]+opt)

		}
	}
	return whateverField;
}
}
	*/
	//-----------------------------------------------------------------
	/*
let index=0;
let field=[];
let whateverField=[];
let s=(size==undefined?Object.keys(whatever).length:size);
opt=charToTag(opt);
for(let i in whatever)
{
field[index]=i;
whateverField.push(whatever[i])
++index;
}

//let v=(s<=field.length-1?s:s-1);
let v=(s>field.length-1?s-1:s);
if(v==0)
{
	document.write(whatever[field[v]]);
	return whateverField;
}
else
{
	document.write(whatever[field[v]]+opt);
	--v;
	return reverse(whatever,v,opt);
}

}
}
*/












/*--------------------------------------------------------------------------------------------
---print and return value ahead without modifyin 1st array,structure legit one
---*/

/*
let array=["name","age","sex"];	
let array02=reverse(array,array.length,",");
for(let i in array02)
		document.write(array02[i]+"<br>")

*/

/*
sex,age,name
name
age
sex

*/
function ahead(whatever,opt="")
{
	let whateverField=[];
	let lp=""
	switch(whatisThat(whatever))
	{
		case "string":
			lp=whatever[whatever.length-1];
			let p=0
			let s=whatever.length-1;
			
			if(isadigit(lp)==true)
			{
				p=Number.parseInt(lp);
				whatever=whatever.slice(0,whatever.length-1);
				s=whatever.length-1;
			}
			else
			{
				p=p;
			}
			
			
			if(p==s)
			{
				for(let i=0;i<=s;++i)
				{
					whateverField.push(whatever[i]);
				}
				document.write(whatever[p]);
			}
			
			else
			{
				
				document.write(whatever[p]+opt);
				++p;
				whatever+=p;
				return ahead(whatever,opt);
			}
		return whateverField;
		break;



		//---------------------------------------------------
		case "array":
			lp=whatever.length-1;
			p=0;
			if(TypeOfVar(whatever[lp])=="int")
			{
				p=whatever[lp];
				whatever.pop();
				lp=whatever.length-1;
			}
			else
			{
				p=p;
			}
			
			if(p==lp)
			{
				for(let i=0;i<=lp;++i)
				{
					whateverField.push(whatever[i]);
				}
				document.write(whatever[p]);
			}
			
			else
			{
				
				document.write(whatever[p]+opt);
				++p;
				whatever.push(p);
				return ahead(whatever,opt);
			}
		return whateverField;
		break;
		

		//-----------------------------------------------------
		
		case "object":

		let index=0;
		let field=[];
		let whateverField=[];
		let obs=Object.keys(whatever).length-1;
		let pos=0;

		
		for(let i in whatever)
		{
			field.push(i);
			++index;
		}


		let lobj=field[obs];
		

		if(pos==obs)
		{
			for(let i=0;i<obs;++i)
			{
				whateverField.push(whatever[i])
			}
			document.write(whatever[pos])
		}

		else
		{
			document.write(whatever[field[pos]]+opt);
			++pos
			whatever[pos]=pos;
			
			//ahead(whatever,opt)
		}
		
		return whateverField;
		break;
	
		}
	}


		//-----------------------------------------------------------------------------
//ahead....another one
	/*
	let index=0;
	let field=[];
	opt=charToTag(opt);
	let whateverField=[];
	
	switch(whatisThat(whatever))
	{
		case "array":
		case "string":
			for(let i in whatever)
			{
				if(i==whatever.length-1)
				{
					document.write(whatever[i]);
				}
				else
				{
					document.write(whatever[i]+opt);
				}
				whateverField.push(whatever[i])
			}
		break;
		case "object":
			for(let i in whatever)
			{
				if(index==Object.keys(whatever).length-1)
				{
					document.write(i)
				}
				else
				{
					document.write(i+opt)
				}
				whateverField.push(i)
				++index;

			}
		break;
	}
	return whateverField;
}
	*/







	/*-----------------------------------------------------------------------------
	---check if it's a digit or not....even if number is in parenthese ...
	--*

	/*
	Code...
	reverse logic
	isadigit("5s5")
	isadigit("55s")
	isadigit("s55")
	isadigit("55")
	
	*/

	/*
		false
		false
		false
		true
	*/
	function isadigit(char)
	{
		let pattern=/[a-z]/g;
		if(char.match(pattern))
			return false;
		else
			return true;
}


/*-----------------------------------------------------------------------------
	---check if it's not a digit or not....even if number is in parenthese ...
	--*

	/*
	Code...
	reverse logic
	isadigit("5s5")
	isadigit("55s")
	isadigit("s55")
	isadigit("55")
	
	*/

	/*
		false
		false
		false
		true
	*/
	function isnotadigit(char)
	{
		let pattern=/[a-z]/g;
		if(char.match(pattern))
			return true;
		else
			return false;
  }


/*----------------------------------------------------------------------------------------------
*remove elemnt of array from index
*/

/*
Code...
let array=['a','b','c'];
let array02=shot(array,1)
*/

/*
result...
array=['a',' ','c']
array02=['a','c']
*/

function shot(x,index)
{
	let ar=[];
	let count=0
	for(let i=0;i<x.length;++i)
	{
		if(i==index)
		{
			x[i]="";
		}
	else
	{
		ar.push(x[i])
	}

	}
		return ar;
}



/*------------------------------------------------------------------------------------------------
clean input from id
*/


/*
Code...

 ______________    ______
|__wat's that__|  |_click|
*/


/*
result...

_______________    ______
|______________|  |_click|

*/
function clearTag(id)
{
	document.getElementById(id).value="";
}



/*--------------------------------------------------------------------------------------------
create break lines
*/

/*
Code...
document.write("this is a text");
	brakLine(8);
	document.write("js library");
*/


/*
result...

this is a test







js library
*/

function brakLine(times=1)
{
	for(let i=1;i<=times;++i)
	{
			document.write("<br>");	
	}
}


/*--------------------------------------------------------------------------------------------
*break line inside word[document.write]
*/

/*
Code...

	document.write("this is a "+brline()+"test");

*/

/*
result...
this is a

test
*/

function brline(times=1)
{
	let string="";
	for(let i=1;i<=times;++i)
	{
		string+="<br>";
	}
	return string;	
}

/*-------------------------------------------------------------------------------------------0
check if param is an obj or array
*/

/*
Code...
let x=["name","age","sex","salary"];
let y={"name":"alex","age":25}
document.write(whatisThat(x))
document.write(whatisThat(y))
*/

/*
result...
array
object
*/

function whatisThat(watisthat)
{

	if(watisthat[0]==undefined)
	{
		return "object";
	}
	else if(watisthat[0].length>1)
	{
		return "array";
	}
	else
	{
		return "string";
	}
}
