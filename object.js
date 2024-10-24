function file()
{
  let filename="object.js";
  document.write("from ''"+filename+"<br>");
} 

function lengthFromObject(obj)
{
	let ob=0;
	for(let i in obj)
	{
		ob++;
	}
	return ob;
}


function getSizeObj(obj)
{
	return Object.keys(obj).length;
}