/*
---
---  print files they are gonna be imported
---
*/
/*
Code...
 let files=["addJS.js","printf.js","cpt.js"];
 printFiles(files);
*/
/*
result...
addJS.js
printf.js
cpt.js
*/

function printFiles(array)
{
  for(let i in array)
  {
    addJSFromArray(array);
    document.write(array[i]);

  }
}

/*
---
--- add files from a obj
---
*/

/*
Code
 let files={
          "addJS.js":"",
          "printf.js":"",
          "cpt.js":"",
          };

         addFromObject(files);
*/

/*
result...
 document.write("<script type='text/javascript' src='addJS.js'><\/script>");
 document.write("<script type='text/javascript' src='printf.js'><\/script>");
 document.write("<script type='text/javascript' src='cpt.js'><\/script>");
*/
function addFromObject(obj)
{
  
  for(let i in obj)
  {
   document.write("<script type='text/javascript' src='"+obj[i]+"'><\/script>");
  }

}


function addJSFromArray(array,path="./")
{
  
  for(let i=0;i<array.length;i++)
  {
   document.write("<script type='text/javascript' src='"+path+array[i]+"'><\/script>");
  }
  
  
}


function addJSFromParam(...params)
{
for(let i=0;i<params.length;i++)
  {
    document.write("<script type='text/javascript' src='"+params[i]+"'><\/script>");
  }
  
}


function addJS(file)
{
    document.write("<script type=\"text/javascript\" src=\""+file+"\"><\/script>");

  
}


function add(argument)
{
  let x=typeof(argument);
  let y=Object.keys(argument).length;
 
  if(x=="string")
  {
    document.write("<script type='text/javascript' src='"+argument+"'><\/script>");
  }
  else 
  {
    for(let i in argument)
    document.write("<script type='text/javascript' src='"+i+"'><\/script>");
  }

}
