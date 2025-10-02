// function welcome(name, callback) {
//     console.log(`welcome ${name}`)
//     setTimeout(() => {
//         callback(name)
//     }, 2000)

// }
// function greet(name) {
//     setTimeout(() => {
//         console.log(`bye ${name}`)
//     }, 1000)
// }
// welcome("pratiksha",greet)

// let prom1=new Promise(
//     function Greeting(resolve, reject){
//         let rand=Math.random();
//         console.log("data fetching.......")
//         if(rand<0.5){

//             setTimeout(() => {
//                 resolve("data fetch successfuly");
//                 // setTimeout(() => {                    console.log('you can carry on with data');
                    
//                 // }, 1000)
                
                
//             }, 2000)
            
//         }
//         else{
//             setTimeout(() => {
//                 // resolve("data fetching unsuccessful");
//                 reject("data fetching unsuccessful");//gives error 
//             }, 2000)
//         }
//     }
// )
// let prom2=new Promise(function demo(resolve,reject) {
//     console.log("welcome pratiksha")
// resolve("Im done !!!!")
//})
// prom1.then((value)=>{
//     console.log(value)
//      return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("you can carry on with data");
//             resolve();
//         }, 1000);
//     });
// }).catch((error)=>{
//     console.log(error);//handle error reject part
    
// }).finally(()=>{
//     console.log('thank you for visiting');
    
// })

// let p3=Promise.race([prom1,prom2])
// p3.then((val)=>{
//     console.log(val);
    
// }).catch((Error)=>{
//     console.log(Error);
    
// })

let p1=new Promise(function(resolve,reject){
    console.log("hello pratiksha")
    resolve("promise1")
      })
      let p2=new Promise(function(resolve,reject){
    console.log(" what are you doing ")
    resolve("promise2")
      })
      let p3=new Promise(function(resolve,reject){
             console.log("have a nice day")
        setTimeout(() => {
            
       resolve("promise3")
        }, 2000)
        
      })
      let p4=new Promise(function(resolve,reject){
    console.log("goodbye")
    resolve("promise4")
      })//⚠HERE ALL PROMISES EXECUTE PARRALLELY NOT ONE AFETR ANOTHER FOR THAT..

//   p1()
//   .then(() => p2())
//   .then(() => p3())
//   .then(() => p4())
//   .then(() => console.log("✨ All done in order"));

//   let promises=Promise.all([p1,p2,p3,p4])
// //  console.log(promises)
// promises.then((val)=>{
//     console.log(val);
    
// })
// p1.then(val=>{
//     console.log(val);
    
    
// }).then(val2=>{
//     console.log(val2);
    
// })

p1.then(val=>{
    console.log(val);
    
}).then(val=>{
    console.log('result form p3',val);
    return p3
    
})

  