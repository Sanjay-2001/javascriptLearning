const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000)

})


promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("async task 2");
    resolve();
},1000)
}).then(function(){
    console.log("async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: "sanjay", email:"sanjay@mail.com"})
    }, 1000);
}).then(function(user){
console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"sanjay",password:"mail@mail.com"});
        }else{
            reject('ERROR: Something went wrong!');
        }
    },1000)
   
})

const username = promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then((username)=>{
console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either resolved or rejected");
})

console.log(username);


const promiseFive = new Promise(function(resolve,reject){
setTimeout(()=>{
let error = true;
if(!error){
    resolve({username:"sanjay976",password:"123"});
}else{
    reject('ERROR: Something went wrong!');
}
},1000)
})

async function consumePromiseFive(){
    try{

        const response = await promiseFive;  
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();

async function getAllUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response);

        const data = await response.json();

        console.log(data);
    }catch(error){
        console.log("E :",error);
    }
}