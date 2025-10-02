// // let Student = ['sachin', 101, 'cse', 8.6];
// // console.log(Student);
// // console.log(Student.length);
// // for (let i in Student) {
// //     console.log(i ,Student[i]);
// // }
// // console.log(Student.indexOf('cse'));
// // console.log(Student.indexOf(1001));
// let fruits=['avacado','apple','banana','grapes','kivi'];
// // console.log(fruits.length);
// // console.log(Object.keys(fruits));
// // console.log(fruits.sort());
// let num=[12,34,2,-8,34,43,4,8,65,78,76,74,56,78,3];
// //console.log(num);
// console.log(num.filter((num)=>{
//     return num>50;
// }));
// function ispositive(num){
//     return num<0;
// }
// console.log(num.filter(ispositive));
// let result=num.concat(fruits);
// let arr=num.map((n)=>{
//    return n*2;
   
// })
// console.log(arr);
// console.log(num.find((n)=>{
//     return n%11==0;
// }));
// console.log(num.reduce((n1,n2)=>{
//     return n1+n2;
// }))
// for(i=0;i<5;i++){

//     console.log(Math.floor(Math.random()+i))
// }

console.log(Math.random())
let num=Math.random();
let res=0.6<num ?true:false;
console.log(res);