const fact=(n)=>{
   let fact=1;
    if(n<0){
        return -1;
    }
    else {
        if(n==0||n==1){
           return 1;
        }
        else{
           
               for(let i=2;i<=n;i++){
                    fact*=i;
                }
        }
    }
    return fact;
}
console.log(fact(10));