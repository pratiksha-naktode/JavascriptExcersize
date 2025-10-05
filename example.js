array=[1,2,3,5,6,7,89]
obj={
    a:1,
    b:2,
    c:3
}

for(i of array){
    console.log(i)
}
for(i in array){
    console.log(i)
}
for(i in obj){
    console.log(obj[i])
}
for(values of Object.values(obj)){
    console.log(values);
    
}
