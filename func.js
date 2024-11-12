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

function isDecimal(char)
{
	let pattern = /\d\.\d/;
	
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
	if(isDecimal(char) == true )
		return "decimal";
	else if(isINT(char) == true)
		return "int";
	else if(typeof char == "string" && char.length == 1 )
		return "char";
	else if(typeof char == "string")
		return "string";
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


function reverse(/*whatever,size,opt=""*/...param)
{
let whateverField=[];
let tp=param.length;
let whatever=param[tp-tp];
opt=charToTag(param[tp-1]);
let i="";
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
	i=whatever;
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
	i=whatever.length-1;
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
*/





function cleanMatriz(x)
{
	for(let i=0;i<x.length;++i)
	{
		if(i==x.length-1)
		{
			x.pop();
		}
		
		else
		{
			x[i]=x[i+1];
		
		}
	
	}
		return x;
}

function shot(x)
{
	let ar=[];
	for(let i=0;i<x.length;++i)
	{
		if(i==x.length-1)
		{
			x[i]=undefined;
		}
		
		else
		{

			x[i]=x[i+1];
			ar.push(x[i]);
		}
	
	}
		return ar;
}


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
function ahead(whatever,size,opt="")
{

	let index=0;
	let field=[];
	opt=charToTag(opt);
	for(let i in whatever)
	{
		field[index]=i;
		++index;
	}

	if(size<field.length-1)
	{
		document.write(whatever[field[size]]+opt);
		++size;
		return ahead(whatever,size);
	}
	else
	{
		document.write(whatever[field[size]]);
		return;
	}
}


/*
irof using recursively
*/
function recursively(whatever,size,opt="")
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
	keyzin.push(whatever[field[v]]);
	return;
}
	keyzin.push(whatever[field[v--]]);
	return recursively(whatever,v);
}



/*
for ahead using recursivety
*/
function recursivelyAHEAD(whatever,size,opt="")
{

let index=0;
let field=[];

opt=charToTag(opt);
for(let i in whatever)
{
field[index]=i;
++index;
}


if(size<field.length-1)
{
	keyzin.push(whatever[field[size]]);
	++size;
	return recursivelyAHEAD(whatever,size);
}
	keyzin.push(whatever[field[size]]);
	return;
}


/*
format date show up
*/
function formatDateToString(){
	let nd = new Date();
   dd = (nd.getDate() < 10 ? '0' : '') + nd.getDate();
   MM = ((nd.getMonth() + 1) < 10 ? '0' : '') + (nd.getMonth() + 1);
   yyyy = nd.getFullYear();
   let newDate= (MM + "/" + dd + "/"  + yyyy);
}


/*
clean form from id
*/
function formClear(id=0)
{
	document.forms[id].reset();
}



/*
create break lines
*/
function br(times=1)
{

	for(let i=1;i<=times;++i)
		document.write("<br>");	
}


/*
check if param is an obj or array
*/
function whatisThat(watisthat)
{

	if(watisthat[0]==undefined)
	{
		return "object";
	}
	else
	{
		return "array";
	}
}
