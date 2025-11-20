const http = require('http');
const usersData=[
    {
        name:'anil',
        age:23,
        email:'anil@test.com'
    },
    {
        name:'Tanya',
        age:13,
        email:'tanya@test.com'
    },
    {
        name:'shivam',
        age:20,
        email:'tanya@test.com'
    },
]
http.createServer((req,res )=>{
    res.setHeader("Content-Type", 'application/json')
    res.write(JSON.stringify(usersData));
    res.end();


}).listen(8000);