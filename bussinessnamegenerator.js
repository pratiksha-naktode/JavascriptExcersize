let rad=Math.random();
let A,S, Z;
if(rad>0.6){
A="Crazy";
}
else if(rad<0.5){
    A="Amazing";
}
else{
    A="Fire";
}
let r1=Math.random();
if(r1>0.5){
    S="Engine";
    }
    else if(r1<0.9){
        S="Food";
    }
    else{
        S="Garnment";
    }
    let r=Math.random();
if(r>0.5){
    Z="Bros";
    }
    else if(rad<0.5){
        Z="Limiited";
    }
    else{
        Z="Hub";
    }
console.log("Bussiness Name=" +A+" "+S+" "+Z)
