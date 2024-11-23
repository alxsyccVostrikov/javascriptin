function precision(n,fixed)
{
	let re="";
	let p=0;
    let size=n.toString().length;
    if(size==1)
	{
    	
    	p=n.toFixed(fixed);
	}
	else
	{
		re=new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`);
		p=`${n}`.match(re);
	}
	return p;
}
