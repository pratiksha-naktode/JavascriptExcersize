
// container=document.querySelector(".container")
// container.onclick=()=>{
//     alert("grandparent clicked")
//     container.style.backgroundColor="black"
// }
// parent=document.querySelector(".box")
// parent.onclick=(event)=>{

//     alert("parent click")
//     parent.style.backgroundColor="green"
//     // parent.stopImmediatePropagation()
//     event.stopPropagation()

// }
// parent2=document.querySelector(".box2")

// parent2.addEventListener('mouseup',()=>{
// parent2.style.backgroundColor="red"

// });

// parent2.addEventListener('click',(event)=>{
// alert("parent 2 clicked")
// event.stopImmediatePropagation();
// });


// button=document.getElementById("btn")
// button.onclick=(event)=>{
//     alert("you have click button");
//     button.style.backgroundColor="red";
//     event.stopPropagation()
// }

function getcolor() {
    let rad = Math.ceil(0 + Math.random() * 255);
    let rad2 = Math.ceil(0 + Math.random() * 255);
    let rad3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${rad},${rad3},${rad2})`

}
let id = setInterval(() => {
    document.querySelector(".heading").style.color = getcolor();
}, 2000);
setTimeout(() => {
    document.querySelector(".heading").insertAdjacentText("afterend", "Pratiksha naktode")
}, 3000);

function bye() {
    console.log("Bye")
}
// function greet(callback){
//      console.log("Hello pratiksha")
//     setTimeout(() => {
//         callback()
//     }, 2000)

//     }

// //    greet(bye);
//    function  fetchdata(callback){
// console.log(`fetching data......`)
// setTimeout(() => {
//     console.log("✅data fetch successfully")
//     callback()
// }, 2000)

//    }
//    function finish(callback){
//     setTimeout(() => {
//         console.log("Finished task")
//         callback();
//     }, 1000)

//    }
//    function pratiksha(){
//     console.log("goodbye pratiksha.....")
//    }
// // fetchdata(finish(pratiksha));
// fetchdata(()=>finish(pratiksha))

function welcome(name, callback) {
    console.log(`welcome ${name}`)
    setTimeout(() => {
        console.log("have a nice day")
        callback(name)
    }, 2000)

}
function greet(name,callback) {
    setTimeout(() => {
        console.log(`So whhat is your plan for day ${name}`)
        callback(name)
    }, 1000)

}
function plan(name ,callback) {
    setTimeout(() => {
        console.log(`lets plan ${name}`)
        callback();
    }, 2000)
}

function goodbye() {
    setTimeout(() => {
        console.log("good bye...")
    }, 2000)

}
welcome("pratiksha",()=>
    greet("pratiksha",()=>
        plan("pratiksha",()=>
            goodbye())))