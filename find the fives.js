const Find_Five = (N) => 
{
  let x=0;
	 while(N!==0){
	   if(N%10==5)
	   x=x+1;
	   N=parseInt(N/10);
	 }
	 return x;
	 
};