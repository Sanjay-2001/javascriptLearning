function name(name){
    console.log(   `name is ${name}`);
}

name("sanjay");
function add(a,b){
    return a+b;
}

console.log("value of add",add(2,3))

function MultiNum(num1,...numN){
    return numN;
}

console.log(MultiNum(20,10,30));


const userInfo = {
    userName :"Sanjay",
    email:"sanjay@mail.com",
}

const salary = {
    totalSalary: "50000",
    creditedSalary: "45000",
}

function handleUser(userInfo,salaryInfo){
    console.log(`user name is ${userInfo.userName} and email is ${userInfo.email} and salary is ${salaryInfo.totalSalary} and credited salary is ${salaryInfo.creditedSalary}`)
}

handleUser(userInfo,salary);


console.log(addOne(5));
function addOne(num){
    return num+2;
}

// addTwo(5); // will throw error , hoisting issue
const addTwo = function(num){
    return num+2;
} 

console.log(addTwo(3));