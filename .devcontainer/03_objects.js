// singleton
// object literals
// Object.create

const mySym = Symbol("Key1"); 

const jsUser = {
    name: "Sanjay",
    "full name":"Sanjay Dutta",
    [mySym]:"mykey1",
    age: 23,
    location: "Pune",
    email: "sanjay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);


jsUser.email ="sanjay@yahoo.com";
jsUser.name ="jay";
Object.freeze(jsUser);
jsUser.email ="sanjay@microsoft.com";
console.log(jsUser);