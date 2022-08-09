

const Prime_Check = (N) => 
{
	 	 let num =0;
	 for(let x=1; x<=N; x++){
	   if(N%x ===0)
	   num++;
	 }
	 if(num ==2)
    return "YES"
   else
    return "NO"
	
};
