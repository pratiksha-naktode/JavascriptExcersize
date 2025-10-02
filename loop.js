let array=[1,2,4,5,6,7,8,9,21,34,43,34,8];
let student={
    name:"Pratiksha",
    rollno:219,
    age:21,
    address:{
        place:"Nagpur",
        pid:441207,
    }
}

console.log(array.every(n=> n>0))
console.log(array.some(n=>n%2==0))

// for(i=0;i<array.length;i++){
//     console.log(array[i]);
// }
// for(i in array){
//     console.log(array[i])
// }
// for(key in student){
//     console.log(key+" : "+student[key]);
// }
// for(i of array){
//     console.log(array[i])
// }
// for(i of Object.values(student)){
//     console.log(i)
// }
// for([key,val] of Object.entries(student)){
//     console.log(key+":"+val);
// }