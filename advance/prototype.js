let myName = "Sanjay       ";

console.log(myName.length);
console.log(myName.trim().length);
console.log(myName.truelength);


let myHeros =["thor","spiderman"];

let heroPower ={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sanjay = function(){
    console.log(`Sanjay is present in all objects`);
}

Array.prototype.heySanjay = function(){
    console.log("Sanjay says hello");
}

heroPower.sanjay();
myHeros.sanjay();

myHeros.heySanjay();
// heroPower.heySanjay();  //no access to heySanjay



// inheritance
const User ={
    name:"sanjay",
    email:"sanjay@mail.com"
}

const Teacher ={
    teach: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport ={
    makeAssignment:"JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}


Teacher.__proto__=User;

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);



////


let anotherName = "Sanjay      ";
 String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
 }

 anotherName.truelength();

"dutta".truelength();