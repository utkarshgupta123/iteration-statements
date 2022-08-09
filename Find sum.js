const findSum = (n) => {
    
    let sum=0;
    for(let x=2 ;x<=n; x=x+2)
    {
      sum=sum+x;
    }
    return sum;
};
