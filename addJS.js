function file()
{
  let filename="addJS.js";
  document.write("from ''"+filename+"<br>");
}

function printAddedFiles(array)
{
  
  for(let i in array)
    document.write("from '"+array[i]+"'"+"<br>");
}


function addJSFromArray(array)
{
  for(let i=0;i<array.length;i++)
  {
    document.write("<script type='text/javascript' src='"+array[i]+"'></script>");
  }
  
}


function addJSFromParam(...params)
{
for(let i=0;i<params.length;i++)
  {
    document.write("<script type='text/javascript' src='"+params[i]+"'></script>");
    //print('<script type="text/javascript" src="'+path+params[i]+'"></script>');
  }
  
}


function addSingleJS(file)
{
    document.write("<script type='text/javascript' src='"+file+"'></script>");

  
}

function addJSFromFolder(dir,array)
{

    for(let i=0;i<array.length;++i)
    {
      document.write("<script type='text/javascript' src='"+dir+array[i]+"'></script>"); 
    }
}




