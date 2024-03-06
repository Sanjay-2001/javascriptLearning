// const user = new Object();

const user = {}
user.id = "1";
user.name = "Sanjay";
user.email = "sanjay@mail.com";
console.log(user);


const regularUser = {
    email: "sanjay@mail.com",
    fullname: {
        userFullname: {
            firstName: "Sanjay",
            lastName: "Dutta",
        }
    }
}


console.log(regularUser.fullname.userFullname);
console.log(regularUser["fullname"])


const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { obj1, obj2 };
const obj4 = Object.assign({}, obj1, obj2);
const obj5 = { ...obj1, ...obj2 };
console.log(obj3);
console.log(obj4);
console.log(obj5);



const users = [
    {
        id: 1,
        name: "San",
    },
    {
        id: 2, 
        name: 'Jay',
    }
]


console.log(users[1].name);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("email"));
