async function sleep() {
return new Promise((resolve) => {
        setTimeout(() => {

            resolve(550)
        }, 1000)

    })
}

// async function main(){

// let a = await sleep();
// console.log(a);

// let b = await sleep();
// console.log(b);
// }

//  main()

//IFFE.....
(async function main(){

// let a = await sleep();
// console.log(a);

// let b = await sleep();
// console.log(b);
// console.log("done!!!")
// let [x,y ,...rest]=[1,5,7,8,10];
// console.log(x,y,rest);
let obj={
    a:1,
    b:2,
    c:3
}
let {a,b}=obj;
console.log(a,b);
let  flowers={
z:'lily',
y:'rose',
x:'lotus',
}
let {y,z}=flowers;
// console.log(z,y);


// for([key,vale] of Object.entries(obj)){
//     console.log(key, vale);
    
// }

})()

// function sum(a,b,c){
//     return a+b+c;//take individual numbers
// }

console.log(result);
let arr=[1,3,3];
let obj2={...arr}
console.log(obj2); //0:1 1:3, 2:3 index:values

// for(i in arr){
//   sum=arr[i]+sum
// }
// console.log(sum);
// console.log(arr[0]+arr[1]+arr[2]);
// let res=arr.reduce((a,b)=>{return a+b})
// console.log(res);
console.log(sum(...arr));
function sum(a,b,c){
    return a+b+c;//take individual numbers
}
var result=120
