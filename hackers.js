

let er=document.querySelectorAll(".dot")
console.log(er);

setInterval(() => {
    er.forEach((e)=>{
        if(e.classList.contains("dot")){
            e.classList.remove("dot")
            e.classList.add("dot2")
        }
        else{
            e.classList.remove("dot2")
            e.classList.add("dot")
        }
    })
      }, 1000);

let errormsg=document.querySelector(".error-msg")

async function HackersTerminal(){

  let one = await promise1();
  errormsg.textContent = one;
  let two=await promise2();
  errormsg.textContent=two
  let three=await promise3();
  errormsg.textContent=three
  let four=await promise5();
  errormsg.textContent=four
  setTimeout(() => {
    
      errormsg.textContent="Cleaning up"
  }, 5000)
  
}

     async function promise1(){
        return new Promise(resolve=>{
            setTimeout(() => {
              resolve("initializing hacking")
            }, 2000)
            
        })
      }
    async function promise2(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("Reading your files.")
        }, 4000)
    
    })
  }
  async function promise3(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("Password files detected")
        }, 2000)
        
    })
  }
  async function promise5(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("sending all pasword and personal data to server")
        }, 2000)
        
    })
  }

      window.onload=()=>{
        HackersTerminal();
        
      }
