// console.log("apple1")
// let  a=10;
// let b= 50;
// setTimeout(() => {      
//     console.log("banana")

//     console.log(a+b);
// }, 1000);
// console.log(a+b);
// console.log("apple2")
// console.log("apple3")

const fs= require('fs');
fs.readFile("text/file1.txt", "utf-8", (err, data)=>{
    if(err){
        console.log("error in reading file1", err);
        return;
    }
    console.log("file1 data", data);
    fs.readFile("text/file2.txt", "utf-8", (err, data)=>{
        if(err){
            console.log("error in reading file2", err);
            return;
        }
        console.log("file2 data", data);
        fs.readFile("text/file3.txt", "utf-8", (err, data)=>{
            if(err){

                console.log("error in reading file3", err);
                return;
            }
            console.log("file3 data", data);
        })
    })
}
);