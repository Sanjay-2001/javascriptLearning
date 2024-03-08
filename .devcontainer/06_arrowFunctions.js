const user ={
    name:"Sanjay",
    email:"sanjay@mail.com",

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to our website!`);
        console.log(this);
    }
}

user.welcomeMessage();
user.name= "Dutta";
user.welcomeMessage();


const userValue = function () {
    console.log("name is sanjay");
    console.log(this);
}

const userInfo = () =>{
    console.log("name is sanjay");
    console.log(this);
}
userValue();
userInfo();


//implicit return

const addTwo = (num1,num2)=> num1+num2;
// or
const name = ()=> ({username:"Sanjay"});

console.log(addTwo(7,3));
console.log(name());