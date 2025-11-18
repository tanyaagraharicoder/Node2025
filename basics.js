
const data = require('./data')
console.log(data.userName)

// /  function level scope
var a= 200;
//  global level scope 
let b= 20;
console.log(a+b);

//  condition 
if( a== 200){
    console.log("this is if condition")
}

for(var a= 0; a<= 10; a++){
    console.log(a);
}
 var a= 0;
while(a<= 10){
    a++;
    console.log('Tanya')
}
var user =["Tanya ", "jef", "wqdet"]
console.log(user[2]);

//  object
var user ={
    name: 'anil',
    city:'delhi',
    age:'23'
}

console.log(user.age)


