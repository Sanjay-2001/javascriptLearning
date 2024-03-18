const user = {
  username: "Sanjay",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
  },
};

console.log(user.username);
console.log(user.getUserDetails());

function User1(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = User1("Sanjay",12,true);
const userTwo = User1("Dutta",11,false);
console.log(userOne);

const userThree = new User1("Sanjay",12,true);
const userFour = new User1("Dutta",11,false);
console.log(userThree);