/*
---
---  print files they are gonna be imported
---
*/

/*
Code...
 let files=["printf.js","cpt.js"];
 printFiles(files);
*/

/*
result...
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
-----------------------------------------------------------------------------------------------
--- add files from a obj
---
*/

/*
Code
 let files={
          "printf.js":"",
          "cpt.js":"",
          };

         addFromObject(files);
*/

/*
result...
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

/*
-----------------------------------------------------------------------------------------------
--- add files from an array
---
*/

/*
Code
 let files=[
          "printf.js",
          "cpt.js",
          ];

         addFromObject(files);
*/

/*
result...
 document.write("<script type='text/javascript' src='printf.js'><\/script>");
 document.write("<script type='text/javascript' src='cpt.js'><\/script>");

*/

function addJSFromArray(array,path="./")
{
  
  for(let i=0;i<array.length;i++)
  {
   document.write("<script type='text/javascript' src='"+path+array[i]+"'><\/script>");
  }
  
  
}

/*
-----------------------------------------------------------------------------------------------
--- add files from params
---
*/

/*
Code...
  addJSFromParam("printf.js","cpt.js");
*/

/*
result...
 document.write("<script type='text/javascript' src='printf.js'><\/script>");
 document.write("<script type='text/javascript' src='cpt.js'><\/script>");

*/

function addJSFromParam(...params)
{
for(let i=0;i<params.length;i++)
  {
    document.write("<script type='text/javascript' src='"+params[i]+"'><\/script>");
  }
  
}

/*
-----------------------------------------------------------------------------------------------
--- add single files each one
---
*/

/*
Code...
  let file01="cpt.js";
  let file02="printf.js";
  addSingleJSF(file01);
  addSingleJSF(file02);
*/

/*
result...
 document.write("<script type='text/javascript' src='printf.js'><\/script>");
 document.write("<script type='text/javascript' src='cpt.js'><\/script>");

*/

function addSingleJSF(file)
{
    document.write("<script type=\"text/javascript\" src=\""+file+"\"><\/script>");

  
}

/*
-----------------------------------------------------------------------------------------------
--- add files undepends on which type of var is..obj,array or single file
---
*/

/*
Code...
  let file01="cpt.js";
  let file02="printf.js";
  add(file01);
  add(file02);

  
  let f1=["cpt.js","printf.js"];
  add(f1);

  let f2={"cpt.js":"","printf.js":"",};
  add(f2)


  add("cpt.js","printf.js");
*/

/*
result...
 document.write("<script type='text/javascript' src='printf.js'><\/script>");
 document.write("<script type='text/javascript' src='cpt.js'><\/script>");

*/

function add(...argument)
{

  let x=typeof(argument);
  let y=Object.keys(argument).length;
  if(y==1)
  {
    let index=0;
    if(argument[index]=="[object Object]")
    {
      let nobj=Object.keys(argument[index]);
      for(let i in nobj)
      {
        document.write("<script type='text/javascript' src='"+nobj[i]+"'><\/script>");
      }
    }
    else
    {
      let nobj=argument[index];
      let unknow=argument[index][index].length;
      if(unknow==1)
      {
        for(let i in argument)
        {
          document.write("<script type='text/javascript' src='"+argument[i]+"'><\/script>");
        }
      
      }
      else
      {
        for(let i in nobj)
        {
          document.write("<script type='text/javascript' src='"+nobj[i]+"'><\/script>");
        }
      }


    }
  }
  
  else
  {
    for(let i in argument)
      document.write("<script type='text/javascript' src='"+argument[i]+"'><\/script>");
  }

  
}
