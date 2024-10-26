function printFiles(array)
{
  for(let i in array)
  {
    addJSFromArray(array);
    document.write(array[i]);

  }
}


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


function addSingleJS(file)
{
    document.write("<script type='text/javascript' src='"+file+"'><\/script>");

  
}


