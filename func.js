/*
bubble sort and return a sorted array 
original array is modified and new array too

two sorted array
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
return backuped up original array  and modify struture the original array 
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

/*
return sorted array and keep struture the original array 
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

/*
bubble sort backward
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


/*
creat tab on page
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


/*
check if it's or not a Decimal number
*/
function isDecimal(char)
{
	let pattern = /\d\.\d/;
	
	if(pattern.test(char)==true)
	{
		return true;
	}
}


/*
check if it's or not a INT
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


/*
return if yes or false for a found char
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


/*
return which one is the type of
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



/*
forEACH backward
*/
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

/*
foreach backward 02
*/
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

/*
remove special chars from a word
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

/*
remove special chars from a word
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

/*
return array of fields from/of a obj
*/
function getFields(obj)
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
function getFieldByIndex(obj,index)
{
	let array=[];
	for(let i in obj)
	array.push(i);
	return array[index];
}

/*
covert char to Tag
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

/*
backward
*/
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

/*
for ahead
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
function formatDateToString(date){
   dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
   MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
   yyyy = date.getFullYear();
   newDate= (MM + "/" + dd + "/"  + yyyy);
}


/*
clean form from id
*/
function formClear(id=0){
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