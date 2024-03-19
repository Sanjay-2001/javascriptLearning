function setuserName(username) {
  this.username = username;
  console.log("called");
}

function createUser(username,email,password){
    setuserName.call(this,username);
    this.email = email;
    this.password = password;
}

const user1 = new createUser("Sanjay","san@mail.com","123");
console.log(user1);