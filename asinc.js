// async function getdata(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             data=[101,"pratiksha"]
//         resolve(data)
//         }, 5000)
        
//     })
// }
async function getdata(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1',{
        method:"PUT",
        body:JSON.stringify({
            title:"new chapter",
            body:"i learned it",
            userId:1,

        }),
        headers:{
             "Content-Type": "application/json",
        },
        
    })//wait for fetching data
let data= await x.json()// wait for parse data
    return data
   
    
    
}

async function main(){
    console.log('fetching data.......');
data=  await getdata();//wait for function getdata to execute fully
console.log(data);
console.log('data fetched successfuly');
}
main()

// to add new data 

//         method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body:JSON.stringify({
//     title:'pratiksha',
//     body:'naktode',
//     userId:1,
//   }),