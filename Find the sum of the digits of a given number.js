
const Number_Sum = (N) => 
{
  let sum=0,x;
	while(N>0)
	{
	  x =N%10
	  sum =sum+x
	  N=parseInt(N/10)
	}
	return sum;

};