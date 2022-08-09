
const Find_Digits = (N) => 
{
	  let a = N;
	 let b = 1;
	 for(let i=0; i<=5;i++)
	 {
	   a =a/10;
	   if(a>=1){
	     b++;
	   }
	 }
	 return b;
};