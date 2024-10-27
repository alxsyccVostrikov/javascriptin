function boobleSort(array) 
{
  let temp=""; 
  
  for(i=0;i<array.length;i++)
  {
    for(j=0;j<array.length;j++)
    {
      if(array[j]>array[i])
      {
        document.write(array[j]+" bigger than "+array[i]+"<br>")
        temp=array[j];
        array[j]=array[i];
        array[i]=temp;
        document.write(...array);
      }
        
    }
  }
  return array;
}

//list of people who share a link
/*
function report()
{
  BoobleSort();
  document.writeln("<div class='middle'>");
  for(let i=0;i<icon.length;i++)
    document.write("<button onclick=genericSocialShare("+i+") style='margin:8px;'><i class='fab fa-"+icon[i]+"'> "+icon[i]+"</i></button>");
  document.writeln("</div>");
}


  function links()
  {
    BoobleSort();
    document.writeln("<div class='middle'>");
    for(let i=0;i<icon.length;i++)
    document.write("<a class='btn' onclick=genericSocialShare("+i+")><i class='fab fa-"+icon[i]+"'>"+icon[i]+"</i></a>");
    document.writeln("</div>");
  }
  */