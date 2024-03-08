// Immediately Invoked Function Expression (IIFE)

(function db(){
    console.log("db is connected");
})(); // if semicolon not added will throw error as it would not know where to end

((name)=>{console.log("db is connected",name);})("sanjay")